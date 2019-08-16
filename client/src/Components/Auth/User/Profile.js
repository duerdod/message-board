import React from 'react';
import styled from '@emotion/styled';
import NotSignedIn from './NotSignedIn';
import { UserContext } from '../../../context/user-context';

const Username = styled.h2`
  color: ${({ theme }) => theme.grey};
  text-align: center;
  margin: 2rem;
`;

const Profile = () => {
  const { user } = React.useContext(UserContext);
  if (!user) return <NotSignedIn />;
  return <Username>{user.username}</Username>;
};

export default Profile;
