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
          xsmall
        </Button>
        <Button onClick={() => console.log('hej')} color="red" size="small">
          small
        </Button>
        <Button onClick={() => console.log('hej')} color="primary" size="lagom">
          lagom
        </Button>
        <Button onClick={() => console.log('hej')} color="grey" size="large">
          large
        </Button>
        <Button
          onClick={() => console.log('hej')}
          color="secondary"
          size="xlarge"
        >
          xlarge
        </Button>
      </Container>
    )
  );
};

export default UserSavedMessages;
