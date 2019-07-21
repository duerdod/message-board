import React, { useState } from 'react';
import styled from '@emotion/styled';
import messages from '../../data';
import { truncatingText, addMessageTime } from '../../utils';

const SingleMessage = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
  transition: all 0.2s ease;
  grid-row-end: span 1;
  ${p =>
    p.open &&
    `
      grid-row-end: span 2;
    `}
  display: grid;
  grid-template-areas:
    'header readmore'
    'body'
    'footer';
`;

const ReadMore = styled.button`
  font-size: 0.65rem;
  background: transparent;
  outline: 0;
  border: 0;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.black};
  padding: 0.2rem 0.4rem;
  display: block;
  width: 80px;
  margin: 1rem auto;
  cursor: pointer;
  grid-area: 'reademore';
`;

const Header = styled.header`
  grid-area: 'header';
  align-self: start;
`;

const MessageTitle = styled.h2`
  font-size: 1rem;
  margin: 0.5rem 0 0 0;
  color: ${({ theme }) => theme.black};
`;

const MessageContainer = styled.div`
  max-height: 100px;
  grid-area: 'body';
  transition: all 0.2s ease;
  align-self: start;
  overflow: hidden;
  ${p =>
    p.open &&
    `
      overflow: visible;
      max-height: 600px;
    `}
`;

const MessageText = styled.p`
  font-size: 0.85rem;
  grid-area: 'body';
  align-self: start;
`;

const Footer = styled.footer`
  grid-area: 'footer';
  align-self: end;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
  width: 100%;

  > * {
    font-size: 0.65rem;
  }
`;

const Author = styled.span``;

const Date = styled.span``;

export const DummyMessage = ({ dummy }) => (
  <SingleMessage>
    <Header>
      <MessageTitle>{dummy.title || 'title'}</MessageTitle>
    </Header>
    <MessageText>{dummy.message || 'message'}</MessageText>
    <Footer>
      <Author>{dummy.name || 'name'}</Author>
      <Date>{addMessageTime()}</Date>
    </Footer>
  </SingleMessage>
);

const Message = ({ message }) => {
  const [isExapanded, setMessageExpand] = useState(false);
  const [clickedMessageId, setClickedMessage] = useState('');
  const textTruncateLength = 150;

  const handleClick = (toggle, id) => {
    isExapanded ? setMessageExpand(false) : setMessageExpand(true);
    setClickedMessage(id);
  };

  const isContainerExpanded = (isExapanded, id, clickedMessageId) => {
    const open = isExapanded && id === clickedMessageId;
    return open;
  };
  return (
    <SingleMessage
      open={isContainerExpanded(isExapanded, message.id, message.id)}
    >
      <Header>
        <MessageTitle>{message.title}</MessageTitle>
      </Header>
      {message.message.length > textTruncateLength ? (
        <>
          <MessageContainer
            open={isContainerExpanded(isExapanded, message.id, message.id)}
          >
            <MessageText>
              {isContainerExpanded(isExapanded, message.id, message.id)
                ? message.message
                : truncatingText(message.message, textTruncateLength)}
            </MessageText>
          </MessageContainer>
          <ReadMore onClick={() => handleClick(true, message.id)}>
            Read
            {isContainerExpanded(isExapanded, message.id, message.id)
              ? ' less'
              : ' more'}
          </ReadMore>
        </>
      ) : (
        <MessageText>{message.message}</MessageText>
      )}
      <Footer>
        <Author>{message.author}</Author>
        <Date>{addMessageTime()}</Date>
      </Footer>
    </SingleMessage>
  );
};

export default Message;
