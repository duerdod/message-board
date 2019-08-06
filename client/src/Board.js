import React, { useState } from 'react';
import CardGrids from './Components/ui/CardGrids';
import Header from './Components/Header/Header';
import Messages from './Components/Messages/Messages';
import Information from './Components/Infomation/Information';

const Board = () => {
  const [isInformationVisible, toggleVisible] = useState(false);
  return (
    <main>
      <Header toggleVisible={toggleVisible} />
      <CardGrids isInformationVisible={isInformationVisible}>
        {isInformationVisible ? <Information /> : <Messages />}
      </CardGrids>
    </main>
  );
};

export default Board;
