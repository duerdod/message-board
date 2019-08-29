import React from 'react';
import styled from '@emotion/styled';
import { userApproval } from '../../../utils/utils';
import { ReactComponent as Person } from '../../../svg/Person2.svg';

const Header = styled.header`
  .name-info {
  }
`;

const Avatar = styled.div`
  span {
    display: inline-flex;
    padding: 6px;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.boxShadow};
    margin-right: 6px;
  }
  svg {
    height: 5rem;
    width: 5rem;
    stroke: ${({ theme }) => theme.black};
  }
`;

const Username = styled.h2`
  color: ${({ theme }) => theme.color.primary.tint[1]};
  /* text-align: right; */
  font-weight: 900;
  font-size: 1.8rem;
  margin-top: 2rem;
  padding: 0;
  letter-spacing: 1px;
`;

const UserInformation = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.grey.tint[0]};
  display: grid;
  grid-template-columns: 30px 1fr;
  span {
    margin-left: 6px;
  }
`;

const UserHeader = ({ currentUser }) => {
  return (
    <Header>
      <div className="name-info">
        <Username>{currentUser.username}</Username>
        <UserInformation>
          <span role="img" aria-label="heart">
            ❤️
          </span>
          <span>{userApproval(currentUser.messages)}%</span>
        </UserInformation>
        <UserInformation>
          <span role="img" aria-label="messages count">
            💌️
          </span>
          <span>{currentUser.messages.length}</span>
        </UserInformation>
      </div>
      <Avatar>
        <span>
          <Person />
        </span>
      </Avatar>
    </Header>
  );
};

export default UserHeader;
