/**
 *
 * ListItem
 *
 */
import React from 'react';
import {
  Item,
  Title,
  Host,
  ExternalLink,
  Description,
  CommentLink,
} from './ListItemStyles';

const ListItem = () => (
  <Item>
    <ExternalLink href="#" rel="nofollow noreferrer noopener" target="_blank">
      <Title>
        Developer <Host>(github.com)</Host>
      </Title>
    </ExternalLink>
    <Description>
      9000 points by{' '}
      <CommentLink href="#" rel="nofollow noreferrer noopener" target="_blank">
        Test User
      </CommentLink>{' '}
      1 Hour ago
      {' | '}
      <CommentLink href="#" rel="nofollow noreferrer noopener" target="_blank">
        42 Comments
      </CommentLink>
    </Description>
  </Item>
);

export default ListItem;
