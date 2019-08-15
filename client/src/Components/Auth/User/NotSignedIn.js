import React from 'react';
import styled from '@emotion/styled';
import { CommentsContainer } from '../../ui/CommentsContainer';
import ThemeButton from '../../ui/ThemeButton';

const StyledCommentsContainer = styled(CommentsContainer)`
  > div {
    > h2 {
      color: ${({ theme }) => theme.green};
      text-align: center;
      margin-bottom: 0;
    }
    > button {
      display: block;
      margin: 0.5rem auto 2rem auto;
    }
  }
`;

const NotSignedIn = ({ history }) => {
  return (
    <StyledCommentsContainer>
      <div>
        <h2>Yo aint no user</h2>
        <ThemeButton onClick={() => history.push({ pathname: '/signin' })}>
          Please sign in
        </ThemeButton>
      </div>
    </StyledCommentsContainer>
  );
};

export default NotSignedIn;
