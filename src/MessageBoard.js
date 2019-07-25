import React from 'react';
import styled from '@emotion/styled';
import FormContainer from './Components/AddMessages/Dashboard';
import Messages from './Components/Messages/Messages';
import useForm from './Components/AddMessages/useForm';

const Container = styled.main`
  display: grid;
  grid-template-columns: 330px 1fr;
  grid-gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr;
  }
`;

const MessageBoard = () => {
  const { values, handleChange, handleSubmit } = useForm();

  return (
    <Container>
      <FormContainer
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Messages values={values} />
    </Container>
  );
};

export default MessageBoard;
