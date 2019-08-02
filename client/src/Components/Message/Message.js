import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import MessageBody from './MessageBody';
import Footer from './Footer';

const SingleMessage = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: all 0.2s ease;
`;

const Message = ({ message }) => (
  <SingleMessage>
    <Header message={message} />
    <MessageBody message={message} />
    <Footer id={message.id} dislikes={message.dislikes} />
  </SingleMessage>
);

export default Message;
