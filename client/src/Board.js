import React, { useState } from 'react';
// import styled from '@emotion/styled';
import CardGrids from './Components/ui/CardGrids';
import Dashboard from './Components/Dashboard/Dashboard';
import Messages from './Components/Messages/Messages';
import Information from './Components/Infomation/Information';

// const Container = styled.main`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
//   grid-gap: 1rem;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem;

//   .message {
//     &.expanded {
//       grid-row: span 2;
//     }
//     /* .content {
//       height: 150px;
//       &.expanded {
//         height: auto;
//       } */
//     }
//   }
//   > div {
//     will-change: transform;
//   }
//   @media screen and (max-width: 40em) {
//     grid-template-columns: 1fr;
//     padding: 0.3rem;
//   }
// `;

const Board = () => {
  const [isInformationVisible, toggleVisible] = useState(
    process.env.NODE_ENV === 'development'
  );
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
