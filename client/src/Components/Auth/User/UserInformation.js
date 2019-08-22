import React from 'react';
// import styled from '@emotion/styled';
import UserDetails from './UserDetails';
// import useUser from '../../../hooks/useUser';

const UserInformation = ({ id, openTabId, currentUser }) => {
  return (
    openTabId === id && (
      <div>
        <UserDetails currentUser={currentUser} />
      </div>
    )
  );
};

export default UserInformation;
