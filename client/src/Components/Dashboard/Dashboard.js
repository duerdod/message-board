import React from 'react';
import styled from '@emotion/styled';
import AddMessages from '../AddMessages';
import { FiInfo } from 'react-icons/fi';

const Container = styled.div``;

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
  color: ${({ theme }) => theme.darkGreen};
  font-family: ${({ theme }) => theme.sansSerif};
  font-weight: 800;
  ${p => p.red && `color: ${({ theme }) => theme.lightRed}`};
`;
const InformationContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 25px;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    overflow: visible;
  }
`;

const Information = styled.span`
   svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.darkGreen};
  }

  &:hover {
    &:after {
      height: 33px;
    }
  }
  &:after {
    left: 50%;
    transform: translateX(-50%);
    height: 0;
    width: 150px;
    text-align: center;
    overflow: hidden;
    position: absolute;
    display: block;
    font-size: 0.75rem;
    padding: 0.5rem;
    transition: all 0.2s ease;
    text-transform: uppercase;
    font-weight: 600;
    box-shadow: ${({ theme }) => theme.boxShadow};
    background: ${({ theme }) => theme.darkGreen};
    color: ${({ theme }) => theme.white};
    border-radius: 4px;
    white-space: pre-wrap;
    content: '${p => p.information}';
  }
`;

const AddMessageSection = () => {
  return (
    <Container>
      <ContainerInner>
        <Title>SHOUT OUT</Title>
        <Title style={{ color: '#ee9ca7' }}>AND</Title>
        <Title style={{ color: '#74b49b' }}>STAY COOL</Title>
        <AddMessages />
        <InformationContainer>
          <Information information="ain\'t concurring? \A ring the bell 🔔">
            <FiInfo />
          </Information>
        </InformationContainer>
      </ContainerInner>
    </Container>
  );
};

export default AddMessageSection;
