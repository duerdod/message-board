import React from 'react';
import styled from '@emotion/styled';
import { useMutation } from '@apollo/react-hooks';
import useForm from '../../hooks/useForm';
import { CommentsContainer } from '../ui/CommentsContainer';
import ThemeButton from '../ui/ThemeButton';
import { SIGN_IN } from '../../gql/gql';

const FormContainer = styled(CommentsContainer)`
  background: ${({ theme }) => theme.white};
  padding: 1rem 1rem 4rem 1rem;

  h2 {
    text-align: center;
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

const Signup = () => {
  const [signin, { data, error }] = useMutation(SIGN_IN);
  const { handleChange, values } = useForm({
    username: '',
    password: ''
  });

  return (
    <FormContainer>
      <h2>SIGN IN</h2>
      <Form>
        <label htmlFor="username">
          <span>Username</span>
          <input name="username" type="text" onChange={handleChange} required />
        </label>

        <label htmlFor="password">
          <span>Password</span>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
        </label>

        <ThemeButton
          onClick={() => {
            signin({
              variables: {
                // For some reason this doesn't work with object shorthands... ie { values }, why?
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

export default Signup;
