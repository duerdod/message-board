import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { useMutation } from '@apollo/react-hooks';
import useForm from '../../hooks/useForm';
import Button from '../ui/Button';
import { SIGN_IN } from '../../gql/gql';
import { ErrorMessage } from '../StatusPage';

// AUTH
import { AuthContext } from '../../context/auth-context';

const FormContainer = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 1rem 1rem 4rem 1rem;

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.color.primary.hex};
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
      bottom: 37px;
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

const Signin = ({ history }) => {
  const { reload } = useContext(AuthContext);

  const { handleChange, values } = useForm();
  const [signin, { error }] = useMutation(SIGN_IN, {
    onCompleted: () => reload().then(() => history.push('/profile'))
  });

  return (
    <FormContainer>
      <h2>SIGN IN</h2>
      <Form>
        <label htmlFor="username">
          <span
            style={{ textTransform: 'lowercase' }}
            role="img"
            aria-label="hint"
          >
            Username 👉🏼 asap_erik
          </span>

          <input
            name="username"
            type="text"
            placeholder="asap_erik"
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="password">
          <span
            style={{ textTransform: 'lowercase' }}
            role="img"
            aria-label="hint"
          >
            Password 👉🏼 hej
          </span>
          <input
            name="password"
            type="password"
            placeholder="hej"
            onChange={handleChange}
            required
          />
        </label>
        {error ? <ErrorMessage error={error.message} /> : null}
        <Button
          size="small"
          color="green"
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
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Signin;
