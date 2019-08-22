import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@apollo/react-hooks';

import UserHeader from './UserHeader';
import Tabs from './Tabs';

// AUTH
import { UserContext } from '../../../context/user-context';
import NotSignedIn from '../NotSignedIn';
import { GET_CURRENT_USER_DETAILS } from '../../../gql/gql';

const ProfileContainer = styled.div`
  max-width: 650px;
  margin: 0 auto;
  position: relative;
  padding: 1rem;

  header {
    display: flex;
    justify-content: space-between;
  }
`;

const Profile = props => {
  const { data, error, loading } = useQuery(GET_CURRENT_USER_DETAILS);
  const { user } = React.useContext(UserContext);
  if (!user) return <NotSignedIn />;
  if (loading) return '';
  if (error) return ':(';
  const { currentUser } = data;
  return (
    <ProfileContainer>
      <UserHeader currentUser={currentUser} />
      <Tabs currentUser={currentUser} />
    </ProfileContainer>
  );
};

export default Profile;
