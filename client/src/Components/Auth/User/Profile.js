import React from 'react';
import styled from '@emotion/styled';

import Tabs from './Tabs';
import { ReactComponent as Person } from '../../../svg/Person2.svg';

// AUTH
import { UserContext } from '../../../context/user-context';
import NotSignedIn from '../NotSignedIn';

const ProfileContainer = styled.div`
  max-width: 650px;
  margin: 0 auto;
  position: relative;
`;

const Avatar = styled.div`
  position: absolute;
  right: 1rem;
  top: -1.5rem;
  span {
    display: inline-flex;
    padding: 6px;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.boxShadow};
    background: ${({ theme }) => theme.lightGrey};
    margin-right: 6px;
  }
  svg {
    height: 5rem;
    width: 5rem;
    stroke: ${({ theme }) => theme.black};
  }
`;

const Username = styled.h2`
  color: ${({ theme }) => theme.darkGreen};
  /* text-align: right; */
  font-weight: 900;
  font-size: 1.8rem;
  margin-top: 2rem;
  padding: 0.5rem 2rem 0.5rem 0;
  letter-spacing: 1px;
`;

const Profile = props => {
  const { user } = React.useContext(UserContext);
  if (!user) return <NotSignedIn />;
  return (
    <ProfileContainer>
      <Avatar>
        <span>
          <Person />
        </span>
      </Avatar>
      <Username>{user.username}</Username>
      <Tabs />
    </ProfileContainer>
  );
};

export default Profile;
