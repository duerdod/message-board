import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import MessageBody from './MessageBody';
import Footer from './Footer';

const SingleMessage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Message = ({ message }) => (
  <SingleMessage>
    <Header message={message} />
    <MessageBody message={message} />
    <Footer id={message.id} dislikes={message.dislikes} />
  </SingleMessage>
);

export default Message;
