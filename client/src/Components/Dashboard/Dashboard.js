import React from 'react';
import styled from '@emotion/styled';
import AddMessages from '../AddMessages';
import { FiInfo } from 'react-icons/fi';

const Container = styled.div`
  grid-row: span 2;
  @media screen and (max-width: 40em) {
    grid-row: span 1;
  }
`;

const ContainerInner = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Title = styled.h2`
  font-size: 2.5rem;
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

const AddMessageSection = ({ toggleOpen }) => {
  return (
    <Container>
      <ContainerInner>
        <Title>SHOUT OUT</Title>
        <Title style={{ color: '#ee9ca7' }}>AND</Title>
        <Title style={{ color: '#74b49b' }}>STAY COOL</Title>
        <AddMessages />
        <InformationContainer>
          <FiInfo onClick={() => toggleOpen(isOpen => !isOpen)} />
        </InformationContainer>
      </ContainerInner>
    </Container>
  );
};

export default AddMessageSection;
