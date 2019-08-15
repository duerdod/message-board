import React from 'react';
// import styled from '@emotion/styled';
import { CommentsContainer as Container } from '../../ui/CommentsContainer';
import NotSignedIn from './NotSignedIn';
import { UserContext } from '../../../context/user-context';

const Profile = () => {
  const { user } = React.useContext(UserContext);

  if (!user) return <NotSignedIn />;
  return (
    <Container>
      <h1 style={{ color: 'green', textAlign: 'center' }}>{user.username}</h1>
    </Container>
  );
};

export default Profile;
