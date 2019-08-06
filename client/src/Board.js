import React, { useState } from 'react';
import CardGrids from './Components/ui/CardGrids';
import Dashboard from './Components/Dashboard/Dashboard';
import Messages from './Components/Messages/Messages';
import Information from './Components/Infomation/Information';

const Board = () => {
  const [isInformationVisible, toggleVisible] = useState(false);
  return (
    <main>
      <Dashboard toggleVisible={toggleVisible} />
      <CardGrids isInformationVisible={isInformationVisible}>
        {isInformationVisible ? <Information /> : <Messages />}
      </CardGrids>
    </main>
  );
};

export default Board;
