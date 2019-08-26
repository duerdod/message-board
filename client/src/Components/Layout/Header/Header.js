import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  background: ${({ theme }) => theme.white};
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.05);

  @media (pointer: coarse) {
    > a {
      text-align: center;
    }
  }
`;

const Title = styled.h2`
  display: inline-block;
  font-size: 1.7rem;
  margin: 0;
  line-height: 1.2;
  font-weight: 800;
  color: ${p => p.theme.color[p.color].tint[p.tint]};
  font-family: ${({ theme }) => theme.sansSerif};
`;

const Logo = () => (
  <Link to="/">
    <Title tint={1} color="primary">
      BULLETIN
    </Title>
    <Title tint={4} color="primary">
      AND
    </Title>
    <Title tint={6} color="primary" style={{ fontStyle: 'italic' }}>
      THE COOLS
    </Title>
  </Link>
);

const Header = () => (
  <HeaderContainer>
    <Logo />
  </HeaderContainer>
);

export default Header;
