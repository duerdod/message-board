import React from 'react';
// import styled from '@emotion/styled';
import Button from '../../ui/Button';

const UserSavedMessages = ({ id, openTabId }) => {
  return (
    openTabId === id && (
      <div>
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
      </div>
    )
  );
};

export default UserSavedMessages;
