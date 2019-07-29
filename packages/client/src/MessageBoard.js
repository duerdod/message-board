import React from 'react';
import styled from '@emotion/styled';
import AddMessageSection from './Components/Dashboard';
import Messages from './Components/Messages';

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
  return (
    <Container>
      <AddMessageSection />
      <Messages />
    </Container>
  );
};

export default MessageBoard;
