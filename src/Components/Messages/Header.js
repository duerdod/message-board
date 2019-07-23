import React from 'react';
import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  grid-area: header;
`;

const MessageTitle = styled.h2`
  font-size: 1rem;
  margin: 0.5rem 0 0 0;
  color: ${({ theme }) => theme.main};
`;

const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <MessageTitle>{title}</MessageTitle>
    </HeaderWrapper>
  );
};

export default Header;
