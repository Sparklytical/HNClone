import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Nav from 'components/Nav';
import List from 'components/List';
import { themes } from 'store/app/utils';
import { colorsDark, colorsLight } from 'styles/palette';

import { Wrapper, Title, TitleWrapper, GithubLink } from './styles';

class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
    this.setBodyBackgroundColor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.setBodyBackgroundColor();
    }
  }

  setBodyBackgroundColor() {
    if (this.props.theme === themes.light) {
      document.body.style = `background-color: ${colorsLight.background};`;
    } else {
      document.body.style = `background-color: ${colorsDark.background};`;
    }
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  render() {
    const { stories, theme } = this.props;
    return (
      <ThemeProvider theme={theme === themes.light ? colorsLight : colorsDark}>
        <div>
          <Nav />
          <Wrapper>
            <TitleWrapper>
              <Title>
                <div> Hacker News Reader</div>
                <GithubLink
                  href="https://github.com/gitconnected/hacker-news-reader"
                  target="_blank"
                >
                  (build your own)
                </GithubLink>
              </Title>
            </TitleWrapper>

            <List stories={stories} />
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

AppContainer.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  stories: [],
};

AppContainer.propTypes = {
  theme: PropTypes.string.isRequired,
  stories: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  storyIds: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchStories: PropTypes.func,
  fetchStoriesFirstPage: PropTypes.func.isRequired,
};
export default AppContainer;