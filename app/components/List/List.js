/**
 *
 * List
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import { ListWrapper } from './styles';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

class List extends Component {
  render() {
    const { stories } = this.props;
    return (
      <ListWrapper>
        {stories.map(story => (
          <ListItem key={story.id} {...story} />
        ))}
      </ListWrapper>
    );
  }
}

List.propTypes = {
  stories: PropTypes.array.isRequired,
};

export default List;
