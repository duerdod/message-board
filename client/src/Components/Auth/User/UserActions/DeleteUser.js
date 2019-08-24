import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_USER } from '../../../../gql/gql';
import styled from '@emotion/styled';
import ThemeButton from '../../../ui/ThemeButton';
import { ErrorMessage } from '../../../StatusPage';

const DeleteInfo = styled.p`
  font-size: 0.75rem;
`;

const DeleteUserButton = styled(ThemeButton)`
  background: ${({ theme }) => theme.red};
  border: 2px solid ${({ theme }) => theme.lightGrey};
`;

const DeleteUser = ({ username, password }) => {
  const [isDeletable, setDeletable] = useState(false);

  const [removeUser, { error }] = useMutation(DELETE_USER, {
    variables: {
      username,
      password
    }
  });

  return (
    <>
      <DeleteUserButton
        onClick={() => {
          if (isDeletable && password && password.length > 1) {
            removeUser()
              .then(() => window.location.replace('/'))
              .catch(err => console.log(err));
          }
          setDeletable(true);
        }}
      >
        Remove account
      </DeleteUserButton>
      {isDeletable ? (
        <DeleteInfo>
          Enter your password to delete your account. All your messages will be
          deleted.
        </DeleteInfo>
      ) : null}
      {error ? <ErrorMessage error={error.message} /> : null}
    </>
  );
};

export default DeleteUser;
