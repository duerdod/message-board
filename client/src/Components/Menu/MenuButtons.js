import React from 'react';
import styled from '@emotion/styled';
import MenuButton from './MenuButton';
import PostButton from '../ui/PostButton';
import BackButton from '../ui/BackButton';
import { withRouter } from 'react-router-dom';

const MenuButtonContainer = styled.div`
  position: sticky;
  bottom: 55px;
  width: 250px;
  margin: 1rem auto;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MenuButtons = props => {
  const { history, location } = props;
  const isStartPage = location.pathname === '/';
  return (
    <MenuButtonContainer>
      <div>
        {!isStartPage ? <BackButton history={history} /> : null}
        <PostButton isStartPage={isStartPage} {...props} />
        <MenuButton />
      </div>
    </MenuButtonContainer>
  );
};

export default withRouter(MenuButtons);
