import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { useMutation } from '@apollo/react-hooks';
import useForm from '../../hooks/useForm';
import ThemeButton from '../ui/ThemeButton';
import { SIGN_UP } from '../../gql/gql';
import { ErrorMessage } from '../StatusPage';

// AUTH
import { AuthContext } from '../../context/auth-context';

const FormContainer = styled.div`
  padding: 1rem 1rem 4rem 1rem;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
    font-weight: 900;
    color: ${({ theme }) => theme.green};
  }
`;

const Form = styled.form`
  width: 60%;
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
    border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
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

const Signup = ({ history }) => {
  const { reload } = useContext(AuthContext);
  const { handleChange, values } = useForm({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: ''
  });
  const [signup, { error }] = useMutation(SIGN_UP, {
    onCompleted: () => reload().then(() => history.push(`/profile`))
  });

  return (
    <FormContainer>
      <h2>SIGN UP</h2>
      <Form>
        <div className="names">
          <label htmlFor="firstName">
            <span>First name</span>
            <input name="firstname" type="text" onChange={handleChange} />
          </label>

          <label htmlFor="lastName">
            <span>Last name</span>
            <input name="lastname" type="text" onChange={handleChange} />
          </label>
        </div>

        <label htmlFor="username">
          <span>Username *</span>
          <input name="username" type="text" onChange={handleChange} required />
        </label>

        <label htmlFor="email">
          <span>Email*</span>
          <input name="email" type="text" onChange={handleChange} required />
        </label>

        <label htmlFor="password">
          <span>Password *</span>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
        </label>
        {error ? <ErrorMessage> {error.message}</ErrorMessage> : null}
        <ThemeButton
          onClick={() => {
            signup({
              variables: {
                // For some reason this doesn't work with object shorthands... ie { values }. TODO.
                firstname: values.firstname,
                lastname: values.lastname,
                username: values.username,
                email: values.email,
                password: values.password
              }
            });
          }}
        >
          Sign up
        </ThemeButton>
      </Form>
    </FormContainer>
  );
};

export default Signup;
