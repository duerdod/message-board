import React from 'react';
import styled from '@emotion/styled';

const MessageTitleText = styled.h2`
  padding: 0 1.5rem;
  font-size: 0.85rem;
  margin: 0.5rem 0 0.2rem 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color.secondary.hex};
`;

const MessageTitle = ({ message, children }) => {
  return <MessageTitleText>{message.title || children}</MessageTitleText>;
};

export default MessageTitle;
