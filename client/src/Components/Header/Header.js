import React from 'react';
import styled from '@emotion/styled';
import { MdDehaze } from 'react-icons/md';
import Form from './Form';
import DesktopForm from './DesktopForm';
import MobileForm from './MobileForm';
import useMobileView from '../../hooks/useMobileView';

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  background: ${({ theme }) => theme.white};
  padding: 0.5rem 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  .title-container {
    justify-self: start;
  }

  .menu-container {
    justify-self: end;
    font-size: 1.5rem;
    svg {
      fill: ${({ theme }) => theme.backgroundCerise};
    }
  }
  @media screen and (max-width: 50em) {
    grid-template-columns: 1fr 1fr;

    .form-container {
      grid-row: 2;
      grid-column: span 4;
      .mobile-form {
        width: 100%;
      }
    }
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  line-height: 1.2;
  font-weight: 800;
  color: ${p => p.color};
  font-family: ${({ theme }) => theme.sansSerif};
  text-shadow: 1px 1px 0px ${({ theme }) => theme.lightPink};
`;

const Header = () => {
  const isMobileView = useMobileView();

  return (
    <HeaderContainer>
      <div className="title-container">
        <Title color="#74b49b">SHOUT OUT</Title>
        <Title color="#ee9ca7">AND</Title>
        <Title color="#a7d7c5">STAY COOL</Title>
      </div>
      <Form className="form-container">
        {isMobileView ? <MobileForm /> : <DesktopForm />}
      </Form>
      {/* Burger */}
      <button className="menu-container">
        <MdDehaze />
      </button>
    </HeaderContainer>
  );
};

export default Header;
