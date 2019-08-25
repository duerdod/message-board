import React from 'react';
import styled from '@emotion/styled';

import Button from '../ui/Button';

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
      {/* <h2>Yo aint no user</h2> */}
      <Button size="small" onClick={() => window.location.replace('/signin')}>
        Please sign in
      </Button>
    </Container>
  );
};

export default NotSignedIn;
