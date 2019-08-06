import React from 'react';
import CardGrid from './Components/ui/CardGrids';
import Header from './Components/Header/Header';
import Messages from './Components/Messages/Messages';

const Board = () => {
  return (
    <main>
      <Header />
      <CardGrid>
        <Messages />
      </CardGrid>
    </main>
  );
};

export default Board;
