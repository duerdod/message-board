import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import styled from '@emotion/styled';
import { AuthContext } from '../../context/auth-context';
import { SIGN_OUT } from '../../gql/gql';

const SignoutButton = styled.button`
  display: inline-block;
  color: ${({ theme }) => theme.lightRed};
  font-weight: 900;
  transition: all 0.2s ease;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;

const Signout = ({ cb }) => {
  const { reload } = React.useContext(AuthContext);
  const [signout] = useMutation(SIGN_OUT, { onCompleted: reload });
  return (
    <SignoutButton
      onClick={e => {
        e.preventDefault();
        signout();
        cb();
      }}
    >
      Sign out
    </SignoutButton>
  );
};

export default Signout;
