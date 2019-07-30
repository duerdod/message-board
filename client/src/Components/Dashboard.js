import React from 'react';
import styled from '@emotion/styled';
import Form from './AddMessages/Form';

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
  color: ${({ theme }) => theme.main};
  font-family: ${({ theme }) => theme.sansSerif};
  ${p => p.red && `color: ${({ theme }) => theme.lightRed}`}
`;

const AddMessageSection = () => {
  return (
    <Container>
      <ContainerInner>
        <Title>Say something</Title>
        <Title style={{ color: '#fcc6c9' }}>Nice.</Title>
        <Title style={{ color: '#FF8B5C' }}>To the Internet.</Title>
        <Form />
      </ContainerInner>
    </Container>
  );
};

export default AddMessageSection;
