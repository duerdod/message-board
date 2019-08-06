import React from 'react';
import styled from '@emotion/styled';
import Form from './Form';
import { FiInfo } from 'react-icons/fi';
import DesktopForm from './DesktopForm';

const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
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

const ContainerInner = styled.div``;

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
const InformationContainer = styled.div`
  position: relative;
  text-align: center;
  cursor: pointer;
  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.darkGreen};
  }
`;

const Header = ({ toggleVisible }) => {
  return (
    <Container className="header-container">
      <div>
        <Title>SHOUT OUT</Title>
        <Title style={{ color: '#ee9ca7' }}>AND</Title>
        <Title style={{ color: '#74b49b' }}>STAY COOL</Title>
      </div>
      <Form>
        <DesktopForm />
      </Form>
      <InformationContainer>
        <FiInfo
          onClick={() =>
            toggleVisible(isInformationVisible => !isInformationVisible)
          }
        />
      </InformationContainer>
    </Container>
  );
};

export default Header;
