import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import MessageBody from './MessageBody';
import Footer from './Footer';

const SingleMessage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({ theme }) => theme.white};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: all 0.2s ease;
`;

const Message = ({ message }) => (
  <SingleMessage className="message">
    <Header message={message} />
    <MessageBody message={message} />
    <Footer
      id={message.id}
      dislikes={message.dislikes}
      comments={message.comments}
    />
  </SingleMessage>
);

export default Message;
