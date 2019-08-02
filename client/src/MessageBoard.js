import React, { useState } from 'react';
import styled from '@emotion/styled';
import Dashboard from './Components/Dashboard/Dashboard';
import Messages from './Components/Messages';
import Information from './Components/Dashboard/Information';

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-auto-flow: dense;
  grid-gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  .expanded {
    grid-row: span 2;
  }
  .message {
    will-change: transform;
  }
  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr;
  }
`;

const MessageBoard = () => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <Container>
      <Dashboard toggleOpen={toggleOpen} />
      {isOpen ? <Information isOpen={isOpen} /> : <Messages />}
    </Container>
  );
};

export default MessageBoard;
