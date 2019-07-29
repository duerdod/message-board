import React from 'react';
import styled from '@emotion/styled';
import { truncateMessage } from '../../utils';
import config from '../../config';

const MessageContainer = styled.div`
  max-height: 100px;
  grid-area: body;
  transition: all 0.2s ease;
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
  grid-area: body;

  color: ${({ theme }) => theme.dark};
`;

const MessageBody = ({
  message,
  isExapanded,
  id,
  isContainerExpanded,
  clickedMessageId
}) => {
  const { messageTruncateLength } = config;
  return message.length > messageTruncateLength ? (
    <>
      <MessageContainer
        open={isContainerExpanded(isExapanded, id, clickedMessageId)}
      >
        <MessageText>
          {isContainerExpanded(isExapanded, id, clickedMessageId)
            ? message
            : truncateMessage(message, messageTruncateLength)}
        </MessageText>
      </MessageContainer>
    </>
  ) : (
    <MessageText>{message}</MessageText>
  );
};

export default MessageBody;
