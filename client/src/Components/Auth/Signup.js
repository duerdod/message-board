import React from 'react';
import styled from '@emotion/styled';
import { CommentsContainer } from '../ui/CommentsContainer';
import useForm from '../../hooks/useForm';

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
`;

const Signup = () => {
  const { handleChange } = useForm({});

  return (
    <FormContainer>
      <h2>SIGN UP</h2>
      <Form>
        <div className="names">
          <label htmlFor="firstName">
            <span>First name</span>
            <input name="firstName" type="text" onChange={handleChange} />
          </label>

          <label htmlFor="lastName">
            <span>Last name</span>
            <input name="lastName" type="text" onChange={handleChange} />
          </label>
        </div>

        <label htmlFor="username">
          <span>Username</span>
          <input name="email" type="text" onChange={handleChange} />
        </label>

        <label htmlFor="email">
          <span>Email</span>
          <input name="email" type="text" onChange={handleChange} />
        </label>

        <label htmlFor="password">
          <span>Password</span>
          <input name="password" type="password" onChange={handleChange} />
        </label>

        <button onClick={e => e.preventDefault()}>Sign up</button>
      </Form>
    </FormContainer>
  );
};

export default Signup;
