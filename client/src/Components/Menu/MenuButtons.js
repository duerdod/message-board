import React from 'react';
import styled from '@emotion/styled';
import MenuButton from './MenuButton';
import PostButton from '../ui/PostButton';
import { withRouter } from 'react-router-dom';

const MenuButtonContainer = styled.div`
  position: sticky;
  bottom: 55px;
  width: 250px;
  margin: 0 auto;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MenuButtons = props => {
  const { history } = props;
  return (
    <MenuButtonContainer>
      <div>
        <PostButton history={history} />
        <MenuButton />
      </div>
    </MenuButtonContainer>
  );
};

export default withRouter(MenuButtons);
