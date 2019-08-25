import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Formik, Form } from 'formik';
import useForm from '../../../hooks/useForm';
import Button from '../../ui/Button';
import DeleteUser from './UserActions/DeleteUser';
import { ErrorMessage } from '../../StatusPage';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_USER, GET_CURRENT_USER } from '../../../gql/gql';
import { AuthContext } from '../../../context/auth-context';

const StyledForm = styled(Form)`
  width: 100%;
  margin: 0 auto;

  label {
    display: block;
    width: 100%;
    font-size: 0.75rem;
    text-transform: uppercase;
    position: relative;
    margin-top: 25px;
    margin-right: 4px;
    span {
      position: absolute;
      bottom: 35px;
      font-size: 0.65rem;
      color: ${({ theme }) => theme.black};
    }
  }

  input {
    border: 1px solid ${({ theme }) => theme.color.white.tint[1]};
    display: block;
    height: 35px;
    width: 100%;
  }
  button {
    margin-top: 1rem;
  }
  .names {
    display: flex;
    justify-content: space-between;
  }
  @media (pointer: coarse) {
    width: 100%;
  }
`;

export function validateEmail(email) {
  let error;
  if (!email) {
    error = 'Nah email supplied';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    error = 'Invalid email address';
  }
  console.log(error);
  return error;
}

const UserDetails = ({ currentUser }) => {
  const { reload } = useContext(AuthContext);
  const [updateUser, { error, loading }] = useMutation(UPDATE_USER, {
    refetchQueries: GET_CURRENT_USER
  });
  const { firstname, lastname, username, email, password } = currentUser;
  const { values, handleChange } = useForm({
    firstname,
    lastname,
    username,
    email,
    password
  });
  // console.log(values.password);
  return (
    <Formik
      initialValues={{ firstname, lastname, email, password: '' }}
      onSubmit={() => {
        updateUser({
          variables: {
            ...values,
            username,
            id: currentUser.id
          }
        }).then(reload);
      }}
      validateOnChange
    >
      {({ handleSubmit, validateField }) => (
        <StyledForm onSubmit={handleSubmit}>
          <div className="names">
            <label htmlFor="firstname">
              <span>Firstname</span>
              <input
                type="text"
                name="firstname"
                placeholder={firstname}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="lastname">
              <span>Lastname</span>
              <input
                type="text"
                name="lastname"
                placeholder={lastname}
                onChange={handleChange}
              />
            </label>
          </div>
          <label htmlFor="username">
            <span>Username</span>
            <input
              type="text"
              name="username"
              placeholder={username}
              onChange={handleChange}
              readOnly
            />
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <input
              type="text"
              name="email"
              placeholder={email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            <span>Current password</span>
            <input
              type="password"
              name="password"
              placeholder={password}
              onChange={handleChange}
              minLength={1}
            />
          </label>
          <label htmlFor="newPassword">
            <span>New password</span>
            <input type="password" name="newPassword" onChange={handleChange} />
          </label>
          {error ? <ErrorMessage error={error.message} /> : null}
          <Button
            disabled={loading}
            size="small"
            color="green"
            onClick={handleSubmit}
          >
            Change details
          </Button>
          <DeleteUser username={username} password={values.password} />
        </StyledForm>
      )}
    </Formik>
  );
};

export default UserDetails;
