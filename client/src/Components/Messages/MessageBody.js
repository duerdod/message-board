import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { shouldMessageExpand, checkMessageForTags } from '../../utils/utils';

const Container = styled.div`
  padding: 0.1rem 1.5rem;
  width: 100%;
`;

const MessageText = styled.div`
  p {
    margin-top: 0;
    margin-bottom: 2rem;
    font-size: 0.85rem;
    font-weight: 300;
    word-wrap: break-word;

    a {
      color: ${({ theme }) => theme.color.primary.hex};
      font-weight: 600;
      margin-right: 0.2rem;
    }
  }
`;

function filterForTags(incoming) {
  const { message, user } = incoming;
  if (!user) return message;
  const tags = message.match(checkMessageForTags());
  if (!tags) return message;
  const messeageWithoutTags = message.replace(checkMessageForTags(), '');
  return AppendTagLink(messeageWithoutTags, tags);
}

const AppendTagLink = (message, tags) => (
  <>
    {message}
    {tags.map((tag, i) => (
      <Link key={i} to={`/messages/${tag.replace('#', '')}`}>
        {tag}
      </Link>
    ))}
  </>
);

const MessageBody = ({ message, children }) => {
  return (
    <Container className={`${shouldMessageExpand(message.message)} content`}>
      <MessageText>
        <p>{message ? filterForTags(message) : children}</p>
      </MessageText>
    </Container>
  );
};

export default MessageBody;
