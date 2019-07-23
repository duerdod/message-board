import React from 'react';
import styled from '@emotion/styled';
import { addMessageTime } from '../../utils';
import ReadMoreButton from './ReadMoreButton';

const Container = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
  width: 100%;

  > * {
    font-size: 0.65rem;
    color: ${({ theme }) => theme.dark};
  }
`;

const Author = styled.span``;

const Date = styled.span``;

const Footer = ({
  message,
  isContainerExpanded,
  handleClick,
  isExapanded,
  clickedMessageId,
  messageLength,
  author
}) => {
  return (
    <Container>
      <Author>{author}</Author>
      <ReadMoreButton
        messageLength={messageLength}
        isContainerExpanded={isContainerExpanded}
        handleClick={handleClick}
        isExapanded={isExapanded}
        clickedMessageId={clickedMessageId}
        id={message.id}
      />
      <Date>{addMessageTime()}</Date>
    </Container>
  );
};

export default Footer;
