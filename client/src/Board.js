import React from 'react';
import styled from '@emotion/styled';
import Messages from './Components/Messages/Messages';

const Main = styled.main`
  position: static;
  @media screen and (max-width: 64em) {
    background: ${({ theme }) => theme.white};
  }
`;

const Board = () => {
  return (
    <Main>
      <Messages />
    </Main>
  );
};

export default Board;
