import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
// import useUser from '../../../hooks/useUser';

import { GET_CURRENT_USER_DETAILS } from '../../../gql/gql';

const About = ({ id, openTabId }) => {
  return (
    openTabId === id && (
      <div>
        <h4>some content bla bla what content blu ble</h4>
        <h4>Messages: countem </h4>
        <h4>Comments: countem</h4>
      </div>
    )
  );
};

const MessagesList = styled.ul`
  width: 80%;
  li {
    margin-bottom: 1rem;
  }
`;
const MessageTitle = styled.h4`
  font-weight: 600;
  font-size: 0.85rem;
`;
const MessageText = styled.p`
  font-size: 0.85rem;
`;

const Messages = ({ id, openTabId }) => {
  const { data, error, loading } = useQuery(GET_CURRENT_USER_DETAILS);
  const { currentUser } = data;
  if (loading) return 'Loading...';
  if (error) return 'Errormessage..';
  return (
    openTabId === id && (
      <div>
        <MessagesList>
          {currentUser.messages.map(({ message, title, id }) => (
            <li key={id}>
              <Link to={`/message/${id}`}>
                <MessageTitle>{title}</MessageTitle>
                <MessageText>{message}</MessageText>
              </Link>
            </li>
          ))}
        </MessagesList>
      </div>
    )
  );
};

export { About, Messages };
