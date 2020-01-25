/**
 *
 * List
 *
 */

import React, { Component } from 'react';
import ListItem from 'components/ListItem';
import { ListWrapper } from './styles';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

class List extends Component {
  render() {
    return (
      <ListWrapper>
        <ListItem />
      </ListWrapper>
    );
  }
}

List.propTypes = {};

export default List;
