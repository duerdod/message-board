import React from 'react';
import styled from '@emotion/styled';
import { FiEye } from 'react-icons/fi';
import { addTimestamp } from '../../utils';

const HeaderWrapper = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

const AuthorContainer = styled.span`
  display: flex;
  align-items: center;
`;

// Hard coded avatar. Fix this.
const Avatar = styled.span`
  display: inline-flex;
  padding: 6px;
  border-radius: 50%;
  background: #f2f2f2;
  margin-right: 6px;
`;
const Author = styled.span`
  font-size: 0.75rem;
`;

const Timestamp = styled.span`
  font-size: 0.75rem;
  opacity: 0.6;
`;

const Header = ({ message }) => {
  return (
    <HeaderWrapper>
      <AuthorContainer>
        <Avatar>
          <FiEye />
        </Avatar>
        <Author>{message.author}</Author>
      </AuthorContainer>
      <Timestamp>{addTimestamp(message.date)}</Timestamp>
    </HeaderWrapper>
  );
};

export default Header;
