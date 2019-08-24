import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { useMutation } from '@apollo/react-hooks';
import useForm from '../../hooks/useForm';
import ThemeButton from '../ui/ThemeButton';
import { SIGN_IN } from '../../gql/gql';
import { ErrorMessage } from '../StatusPage';

// AUTH
import { AuthContext } from '../../context/auth-context';

const FormContainer = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 1rem 1rem 4rem 1rem;

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.green};
    font-weight: 900;
  }
`;

const Form = styled.form`
  width: 60%;
  margin: 0 auto 10rem auto;

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
    &::placeholder {
      color: ${({ theme }) => theme.lightGrey};
    }
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

const Signin = ({ history }) => {
  const { reload } = useContext(AuthContext);

  const { handleChange, values } = useForm({
    username: '',
    password: ''
  });
  const [signin, { error }] = useMutation(SIGN_IN, {
    onCompleted: () => {
      reload();
      history.push('/');
    }
  });

  return (
    <FormContainer>
      <h2>SIGN IN</h2>
      <Form method="POST">
        <label htmlFor="username">
          <span>Username</span>
          <input
            name="username"
            type="text"
            placeholder="poppen"
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="password">
          <span>Password</span>
          <input
            name="password"
            type="password"
            placeholder="hejhej"
            onChange={handleChange}
            required
          />
        </label>
        {error ? <ErrorMessage>{error.message}</ErrorMessage> : null}
        <ThemeButton
          onClick={() => {
            signin({
              variables: {
                username: values.username,
                password: values.password
              }
            });
          }}
        >
          SIGN IN
        </ThemeButton>
      </Form>
    </FormContainer>
  );
};

export default Signin;
