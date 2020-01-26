/**
 *
 * AppContainer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'components/Loader';
import List from 'components/List';
import { Wrapper, Title } from './styles';

class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  render() {
    const { stories, hasMoreStores } = this.props;
    return (
      <div>
        <Wrapper>
          <Title>Hacker News Reader</Title>
          <InfiniteScroll
            dataLength={stories.length}
            next={this.fetchStories}
            hasMore={hasMoreStores}
            loader={<Loader />}
            style={{ height: '100%', overflow: 'visible' }}
          >
            <List stories={stories} />
          </InfiniteScroll>
        </Wrapper>
      </div>
    );
  }
}

AppContainer.propTypes = {
  stories: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  storyIds: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  hasMoreStores: PropTypes.bool.isRequired,
  fetchStories: PropTypes.func.isRequired,
  fetchStoriesFirstPage: PropTypes.func.isRequired,
};

export default AppContainer;
