/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';

import { ListWrapper } from './styles';

class List extends Component {
  static propTypes = {
    stories: PropTypes.array.isRequired,
  };

  render() {
    const { stories } = this.props;
    console.info('Key id');

    console.info({ ...stories });
    return (
      <ListWrapper>
        {stories.map(story => (
          <ListItem key={story.id} {...story} index={story.id} />
        ))}
      </ListWrapper>
    );
  }
}

export default List;
