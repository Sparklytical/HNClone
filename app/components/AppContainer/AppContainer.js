import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Nav from 'components/Nav';
import List from 'components/List';
import Grid from 'components/Grid';
import Loader from 'components/Loader';
import { layouts, themes } from 'store/app/utils';

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
    const { stories, theme, layout, hasMoreStories } = this.props;
    console.info(this.fetchStories);
    return (
      <ThemeProvider theme={theme === themes.light ? colorsLight : colorsDark}>
        <Nav />
        <Wrapper>
          <TitleWrapper>
            <Title>
              <div> Hacker News Reader</div>
              <GithubLink
                href="https://github.com/EvilSpark/HNClone"
                target="_blank"
              >
                Github Repo
              </GithubLink>
            </Title>
          </TitleWrapper>
          <InfiniteScroll
            dataLength={stories.length}
            next={this.fetchStories}
            hasMore={hasMoreStories}
            loader={<Loader />}
            style={{
              height: '100%',
              overflow: 'visible',
            }}
            endMessage={
              <p style={{ textAlign: 'center', color: '#346600' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            // below props only if you need pull down functionality
            refreshFunction={this.fetchStories}
            pullDownToRefresh
            pullDownToRefreshContent={
              <h3 style={{ textAlign: 'center', color: '#fff' }}>
                &#8595; Pull down to refresh
              </h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: 'center' }}>
                &#8593; Release to refresh
              </h3>
            }
          >
            {layout === layouts.list ? (
              <List stories={stories} />
            ) : (
              <Grid stories={stories} />
            )}
          </InfiniteScroll>
        </Wrapper>
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
  hasMoreStories: PropTypes.bool,
  layout: PropTypes.string.isRequired,
};
export default AppContainer;
