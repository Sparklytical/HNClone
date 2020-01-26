/**
 *
 * Grid
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridItem from 'components/GridItem';

import { GridWrapper } from './GridStyles';

class Grid extends Component {
  render() {
    return (
      <GridWrapper>
        {this.props.stories.map(story => (
          <GridItem key={story.id} {...story} />
        ))}
      </GridWrapper>
    );
  }
}
Grid.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Grid;
