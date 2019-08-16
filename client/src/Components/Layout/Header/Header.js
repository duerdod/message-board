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
    .title-container {
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
  color: ${p => p.color};
  font-family: ${({ theme }) => theme.sansSerif};
  text-shadow: 1px 1px 0px ${({ theme }) => theme.lightPink};
`;

const Logo = () => (
  <Link className="title-container" to="/">
    <Title color="#74b49b">BULLETIN</Title>
    <Title color="#ee9ca7">AND</Title>
    <Title color="#a7d7c5" style={{ fontStyle: 'italic' }}>
      THE COOLS
    </Title>
  </Link>
);

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};

export default Header;
