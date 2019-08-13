import React from 'react';
import styled from '@emotion/styled';
import { shouldMessageExpand } from '../../utils/utils';

const Container = styled.div`
  padding: 0.1rem 1.5rem;
  width: 100%;
`;

const MessageText = styled.div`
  p {
    margin-top: 0;
    font-size: 0.85rem;
    font-weight: 300;
    word-wrap: break-word;
  }
`;

const MessageBody = ({ message, children }) => {
  return (
    <Container className={`${shouldMessageExpand(message.message)} content`}>
      <MessageText>
        <p>{message.message || children}</p>
      </MessageText>
    </Container>
  );
};

export default MessageBody;
