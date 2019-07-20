import React from 'react';
import styled from '@emotion/styled';
import messages from '../../data';

const SingleMessage = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 0.5rem 1.5rem;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
`;

const ReadMore = styled.button`
  font-size: 0.65rem;
  background: transparent;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.black};
  padding: 0.2rem 0.4rem;
  display: block;
  width: 40px;
  margin: 0.2rem auto;
`;

const Header = styled.div``;

const MessageTitle = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.black};
`;

const MessageText = styled.p`
  font-size: 0.85rem;
  padding: 0.5rem 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
  > * {
    font-size: 0.65rem;
  }
`;

const Author = styled.span``;

const Date = styled.span``;

const Message = ({ message }) => {
  return (
    <SingleMessage>
      <Header>
        <MessageTitle>{message.title}</MessageTitle>
      </Header>
      <MessageText>{message.message}</MessageText>
      <ReadMore>Read more</ReadMore>
      <Footer>
        <Author>{message.author}</Author>
        <Date>{message.date}</Date>
      </Footer>
    </SingleMessage>
  );
};

export default Message;
