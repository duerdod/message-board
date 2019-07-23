import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';
import Header from './Header';
import MessageBody from './Body';
import Footer from './Footer';

const SingleMessage = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: all 0.2s ease;
  display: grid;
  align-items: flex-start;
  grid-row-end: span 1;
  ${p =>
    p.open &&
    `
      grid-row-end: span 2;
    `}
  grid-template-areas:
    'header'
    'body'
    'footer';
`;

const AnimatedMessage = animated(SingleMessage);

export const TestMessage = () => <div>hejhej</div>;

export const DummyMessage = ({ dummy }) => {
  return (
    <SingleMessage>
      <Header message={dummy || 'TITLE'} />
      <MessageBody message={dummy.message || 'MESSAGE'} />
      <Footer message={dummy.name || 'NAME'} />
    </SingleMessage>
  );
};

const Message = ({ message }) => {
  const [isExapanded, setMessageExpand] = useState(false);
  const [clickedMessageId, setClickedMessage] = useState('');

  const handleClick = (toggle, id) => {
    isExapanded ? setMessageExpand(false) : setMessageExpand(true);
    setClickedMessage(id);
  };

  const isContainerExpanded = (isExapanded, messageId, clickedId) => {
    const open = isExapanded && messageId === clickedId;
    return open;
  };

  // Really just adds style props
  const animatedMessages = useSpring({
    from: { opacity: '0.1' },
    to: { opacity: '1' }
  });

  return (
    <AnimatedMessage
      style={animatedMessages}
      open={isContainerExpanded(isExapanded, message.id, clickedMessageId)}
    >
      <Header title={message.title} />
      <MessageBody
        clickedMessageId={clickedMessageId}
        isContainerExpanded={isContainerExpanded}
        message={message.message}
        isExapanded={isExapanded}
        id={message.id}
      />
      <Footer
        clickedMessageId={clickedMessageId}
        handleClick={handleClick}
        isContainerExpanded={isContainerExpanded}
        isExapanded={isExapanded}
        message={message}
        messageLength={message.message.length}
        author={message.author}
      />
    </AnimatedMessage>
  );
};

export default Message;
