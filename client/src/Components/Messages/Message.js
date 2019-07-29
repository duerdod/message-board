import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import MessageBody from './MessageBody';

const SingleMessage = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: all 0.2s ease;
`;

const Message = ({ message }) => {
  return (
    <SingleMessage>
      <Header message={message} />
      <MessageBody message={message} />
    </SingleMessage>
  );
};

export default Message;
