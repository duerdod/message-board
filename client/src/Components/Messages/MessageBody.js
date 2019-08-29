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
      color: ${({ theme }) => theme.color.primary.tint[3]};
      font-weight: 600;
      margin-left: 0.1rem;
    }
  }
`;

function filterForTags(rawMessage) {
  const { tags, user, message } = rawMessage;
  if (!tags) return <MessageTextWithoutTags message={message} />;
  if (!user) return <MessageTextWithoutTags message={message} />;

  // Room for improvement...
  const messageWithTags = message
    .split(checkMessageForTags())
    .filter(text => text !== ' ' && text !== '');
  return <MessageTextWithTags message={messageWithTags} />;
}

const MessageTextWithoutTags = ({ message }) => (
  <MessageText>
    <p>{message}</p>
  </MessageText>
);

const MessageTextWithTags = ({ message }) => (
  <MessageText>
    <p>
      {message.map((text, i) =>
        // If text chunk includes #, ie. is a tag, return link to it
        text.includes('#') ? (
          <Link key={i} to={`/messages/${text.replace('#', '')}`}>
            {text}
          </Link>
        ) : (
          text
        )
      )}
    </p>
  </MessageText>
);

// Children is returned from Post form.
const MessageBody = ({ message, children }) => (
  <Container className={`${shouldMessageExpand(message.message)} content`}>
    {message ? filterForTags(message) : children}
  </Container>
);

export default MessageBody;
