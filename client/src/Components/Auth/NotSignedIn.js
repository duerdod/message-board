import React from 'react';
import styled from '@emotion/styled';

import ThemeButton from '../ui/ThemeButton';

const Container = styled.div`
  > h2 {
    color: ${({ theme }) => theme.green};
    font-weight: 900;
    text-align: center;
    margin-bottom: 0;
  }
  > button {
    display: block;
    margin: 0.5rem auto 2rem auto;
  }
`;

const NotSignedIn = () => {
  return (
    <Container>
      <h2>Yo aint no user</h2>
      <ThemeButton onClick={() => window.location.replace('/signin')}>
        Please sign in
      </ThemeButton>
    </Container>
  );
};

export default NotSignedIn;
