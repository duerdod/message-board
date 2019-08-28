import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@apollo/react-hooks';
import StatusPage from '../../StatusPage';
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
  padding: 1rem 1rem 4rem 1rem;

  header {
    display: flex;
    justify-content: space-between;
  }
`;

const Profile = () => {
  const { user } = React.useContext(UserContext);
  const { data, error, loading } = useQuery(GET_CURRENT_USER_DETAILS);
  if (!user) return <NotSignedIn />;
  if (loading) return <StatusPage state={loading && 'loading'} />;
  if (error) return <NotSignedIn />;
  const { currentUser } = data;

  return (
    <ProfileContainer>
      <UserHeader currentUser={currentUser} />
      <Tabs currentUser={currentUser} />
    </ProfileContainer>
  );
};

export default Profile;
