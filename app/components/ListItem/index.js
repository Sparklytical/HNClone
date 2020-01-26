import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import getSiteHostname from 'utils/getSiteHostname';
import getArticleLink, { HN_USER } from 'utils/getArticleLink';

import {
  Item,
  Title,
  Host,
  ExternalLink,
  Description,
  CommentLink,
} from './styles';

const ListItem = ({ by, score, url, title, id, time }) => {
  const site = getSiteHostname(url) || 'news.ycombinator.com';
  const link = getArticleLink({ url, id });
  const userUrl = `${HN_USER}${by}`;

  return (
    <Item>
      <ExternalLink
        href={link}
        rel="nofollow noreferrer noopener"
        target="_blank"
      >
        <Title>
          {title} <Host>({site})</Host>
        </Title>
      </ExternalLink>
      <Description>
        {score} points by{' '}
        <CommentLink
          href={userUrl}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          {by}
        </CommentLink>{' '}
        <TimeAgo date={new Date(time * 1000).toISOString()} />
        {' | '}
        <CommentLink
          href="#"
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          32 Comments
        </CommentLink>
      </Description>
    </Item>
  );
};

ListItem.propTypes = {
  by: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};

export default ListItem;
