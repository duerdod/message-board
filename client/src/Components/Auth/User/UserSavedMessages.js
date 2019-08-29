import React from 'react';
import styled from '@emotion/styled';
import Button from '../../ui/Button';

const Container = styled.div`
  > button {
    display: block;
    margin: 1rem;
  }
`;

const UserSavedMessages = ({ id, openTabId }) => {
  return (
    openTabId === id && (
      <Container>
        <Button onClick={() => console.log('hej')} color="green" size="xsmall">
          xsmall / green
        </Button>
        <Button onClick={() => console.log('hej')} color="red" size="small">
          small / red
        </Button>
        <Button onClick={() => console.log('hej')} color="grey" size="lagom">
          lagom / grey
        </Button>
        <Button onClick={() => console.log('hej')} color="primary" size="large">
          large / primary
        </Button>
        <Button
          onClick={() => console.log('hej')}
          color="secondary"
          size="xlarge"
        >
          xlarge / secondary
        </Button>
      </Container>
    )
  );
};

export default UserSavedMessages;
