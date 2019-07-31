import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 0.1rem 1.5rem;
  width: 100%;
`;

const MessageTitle = styled.h2`
  font-size: 0.85rem;
  margin: 0.5rem 0 0.2rem 0;
  font-weight: 600;
  color: ${({ theme }) => theme.darkGreen};
`;

const MessageText = styled.div`
  p {
    margin-top: 0;
    font-size: 0.85rem;
    font-weight: 300;
    word-wrap: break-word;
  }
`;

const MessageBody = ({ message }) => {
  return (
    <Container className="content">
      <MessageTitle>{message.title}</MessageTitle>
      <MessageText>
        <p>{message.message}</p>
      </MessageText>
    </Container>
  );
};

export default MessageBody;
