import React from 'react';
import styled from '@emotion/styled';
import Form from './Form';
import DesktopForm from './DesktopForm';
import MobileForm from './MobileForm';
import useMobileView from '../../hooks/useMobileView';

const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-row: span 2;
  background: ${({ theme }) => theme.white};
  padding: 0.5rem 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  > * {
  }
  @media screen and (max-width: 50em) {
    grid-row: span 1;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  line-height: 1.2;
  font-weight: 800;
  color: ${({ theme }) => theme.darkGreen};
  font-family: ${({ theme }) => theme.sansSerif};
  text-shadow: 1px 1px 0px ${({ theme }) => theme.lightpink},
    2px 2px 0px rgba(0, 0, 0, 0.2);
`;

const Header = () => {
  const isMobileView = useMobileView();

  return (
    <Container className="header-container">
      <div>
        <Title>SHOUT OUT</Title>
        <Title style={{ color: '#ee9ca7' }}>AND</Title>
        <Title style={{ color: '#74b49b' }}>STAY COOL</Title>
      </div>
      <Form>{isMobileView ? <MobileForm /> : <DesktopForm />}</Form>
      {/* Burger */}
    </Container>
  );
};

export default Header;
