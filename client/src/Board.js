import React from 'react';
import styled from '@emotion/styled';
import MenuButton from './Components/Menu/MenuButton';
import Messages from './Components/Messages/Messages';
import Menu from './Components/Menu/Menu';
import PostButton from './Components/ui/PostButton';

const Main = styled.main`
  position: static;
  /* background: ${({ theme }) => theme.white}; */
`;

const MenuButtonContainer = styled.div`
  position: sticky;
  bottom: 55px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Board = () => {
  return (
    <Main>
      <Menu />
      <Messages />
      <MenuButtonContainer>
        <div>
          <PostButton />
          <MenuButton />
        </div>
      </MenuButtonContainer>
    </Main>
  );
};

export default Board;
