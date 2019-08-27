import React from 'react';
import styled from '@emotion/styled';
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
  }
`;

function handleTags(message) {
  const tags = message.match(checkMessageForTags());
  if (!tags) return message;
  const tagsWithSpace = tags.map(tag => ` ${tag} `).join(' ');
  const messeageWithoutTags = message.replace(checkMessageForTags(), '');
  return `${messeageWithoutTags} ${tagsWithSpace}`;
}

const MessageBody = ({ message, children }) => {
  return (
    <Container className={`${shouldMessageExpand(message.message)} content`}>
      <MessageText>
        <p>{handleTags(message.message) || children}</p>
      </MessageText>
    </Container>
  );
};

export default MessageBody;
