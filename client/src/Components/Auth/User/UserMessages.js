import React from 'react';
import styled from '@emotion/styled';
// import { Link } from 'react-router-dom';

const MessagesList = styled.ul`
  width: 80%;
  li {
    cursor: pointer;
    margin-bottom: 1rem;
  }
`;
const MessageTitle = styled.h4`
  font-weight: 600;
  font-size: 0.85rem;
`;
const MessageText = styled.p`
  font-size: 0.85rem;
`;

const UserMessages = ({ id, openTabId, messages }) => {
  return (
    openTabId === id && (
      <div>
        <MessagesList>
          {messages.map(({ message, title, id }) => (
            <li key={id}>
              <MessageTitle>{title}</MessageTitle>
              <MessageText>{message}</MessageText>
            </li>
          ))}
        </MessagesList>
      </div>
    )
  );
};

export default UserMessages;
