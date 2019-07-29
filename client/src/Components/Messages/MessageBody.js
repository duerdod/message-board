import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 0.5rem 1rem;
  width: 100%;
`;

const MessageTitle = styled.h2`
  font-size: 1rem;
  margin: 0.5rem 0 0.5rem 0;
  color: ${({ theme }) => theme.main};
`;

const MessageText = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.dark};
`;

const MessageBody = ({ message }) => {
  return (
    <Container>
      <MessageTitle>{message.title}</MessageTitle>
      <MessageText>{message.message}</MessageText>
    </Container>
  );
};

export default MessageBody;
