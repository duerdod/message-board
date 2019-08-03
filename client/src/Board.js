import React, { useState } from 'react';
import styled from '@emotion/styled';
import CardGrids from './Components/ui/CardGrids';
import Dashboard from './Components/Dashboard/Dashboard';
import Messages from './Components/Messages/Messages';
import Information from './Components/Infomation/Information';

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  .message {
    &.expanded {
      grid-row: span 2;
    }
    .content {
      height: 150px;
      &.expanded {
        height: auto;
      }
    }
  }
  > div {
    will-change: transform;
  }
  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr;
    padding: 0.3rem;
  }
`;

const MessageBoard = () => {
  const [isInformationVisible, toggleVisible] = useState(true);
  return (
    // Is information visible
    // return information grid.
    <CardGrids informationGrid={isInformationVisible}>
      <Dashboard toggleVisible={toggleVisible} />
      {isInformationVisible ? (
        <Information isInformationVisible={isInformationVisible} />
      ) : (
        <Messages />
      )}
    </CardGrids>
  );
};

export default MessageBoard;
