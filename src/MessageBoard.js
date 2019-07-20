import React from 'react';
import styled from '@emotion/styled';
import Dashboard from './Components/AddMessages/Dashboard';
import Messages from './Components/Messages/Messages';

const Container = styled.main`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const MessageBoard = () => {
  return (
    <Container>
      <Dashboard />
      <Messages />
    </Container>
  );
};

export default MessageBoard;
