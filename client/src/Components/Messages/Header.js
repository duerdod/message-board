import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Person } from '../../svg/Person.svg';
import { addTimestamp } from '../../utils/utils';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: initial;
  align-content: center;
  align-items: center;
  padding: 0.5rem 0.8rem 0 0.8rem;
`;

const AuthorContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 4px;
`;

// Hard coded avatar. Fix this.
const Avatar = styled.span`
  display: inline-flex;
  padding: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.lightGrey};
  margin-right: 6px;

  svg {
    height: 1rem;
    width: 1rem;
  }
`;
const Author = styled.span`
  font-size: 0.75rem;
`;

const Timestamp = styled.span`
  font-size: 0.65rem;
  opacity: 0.5;
`;

const Header = ({ message }) => {
  return (
    <HeaderWrapper>
      <AuthorContainer>
        <Avatar>
          <Person />
        </Avatar>
        <Author>{message.author}</Author>
      </AuthorContainer>
      <Timestamp> &#8729; {addTimestamp(message.date)}</Timestamp>
    </HeaderWrapper>
  );
};

export default Header;
