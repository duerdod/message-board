import React, { useState, createContext } from 'react';
import styled from '@emotion/styled';
import { Mutation } from 'react-apollo';
import useForm from '../../hooks/useForm';
import { ADD_MESSAGE, GET_ALL_MESSAGES } from '../../gql/gql';

const MessageForm = styled.form`
  display: flex;
  align-items: center;
  input,
  textarea {
    width: 100%;
    outline: 0;
    border: 0;
    padding: 0.5rem 0.5rem;
    margin: 0.2rem 0;
    font-family: ${({ theme }) => theme.sansSerif};
    background: transparent;
    border-radius: 2px;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.darkGreen};
    resize: none;
    &:not(output):-moz-ui-invalid:not(:focus),
    &:not(output):-moz-ui-invalid:focus,
    &:not(output):-moz-ui-invalid:-moz-focusring:not(:focus) {
      box-shadow: none;
    }

    &::placeholder {
      text-transform: uppercase;
      font-size: 0.65rem;
      font-family: ${({ theme }) => theme.sansSerif};
    }
    @media screen and (max-width: 55em) {
      font-size: 1.1rem;
    }
  }
`;

export const FormContext = createContext();

const Form = ({ children, className }) => {
  // Count is being used to render correct step when using DesktopForm. Name is for client side error handling.
  // Aka later feature.
  const [step, setStep] = useState({
    count: 0,
    name: ''
  });

  // Could this be dymanic? Should probably be handled in useForm hook instead.
  const availableInputs = ['message', 'title', 'name'];

  const {
    values,
    handleChange,
    handleSubmit,
    setValues,
    isValid,
    stateInit
  } = useForm();

  const onMessageComplete = () => {
    setValues(stateInit);
    setStep({
      count: 0,
      name: ''
    });
  };

  return (
    <Mutation
      mutation={ADD_MESSAGE}
      variables={values}
      refetchQueries={[
        {
          query: GET_ALL_MESSAGES
        }
      ]}
      onCompleted={onMessageComplete}
    >
      {(addMessage, { error, loading }) => (
        <FormContext.Provider
          value={{
            addMessage,
            values,
            handleChange,
            handleSubmit,
            setValues,
            step,
            setStep,
            availableInputs,
            loading,
            error,
            isValid
          }}
        >
          <MessageForm
            className={className}
            onSubmit={e => handleSubmit(e, addMessage)}
          >
            {/* Either DesktopForm or MobileForm in Header.js */}
            {children}
          </MessageForm>
        </FormContext.Provider>
      )}
    </Mutation>
  );
};

export default Form;
