import React from 'react';
import styled from '@emotion/styled';
import AddMessageSection from './Components/Dashboard/Dashboard';
import Messages from './Components/Messages';

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
    .content {
      height: auto !important;
    }
  }
  .message {
    .content {
      height: 115px;
    }
  }
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
