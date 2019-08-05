import React, { useState, createContext } from 'react';
import styled from '@emotion/styled';
import { Mutation } from 'react-apollo';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { trimErrorMessage } from '../../utils/utils';
import useForm from '../../hooks/useForm';
import { ADD_MESSAGE, GET_ALL_MESSAGES } from '../../gql/gql';
import { ErrorMessage } from '../StatusPage';
import { Title, Message, Name } from './FormInputs';
import StepButton from './StepButton';
import SendButton from './SendButton';

const MessageForm = styled.form`
  display: flex;
  justify-content: space-around;
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
    @media screen and (max-width: 40em) {
      font-size: 1.1rem;
    }
  }
`;

const FormSteps = ({ count }) => {
  // Not sure if this is any better, tho.
  // Should probably go with an if else statement...
  return count === 0 ? (
    <Message />
  ) : count === 1 ? (
    <Title />
  ) : count === 2 ? (
    <>
      <Name />
      <SendButton />
    </>
  ) : null;
};

export const FormContext = createContext();

const Form = () => {
  // Count is being used to render correct step. Name is for client side error handling.
  // A later feature.
  const [step, setStep] = useState({
    count: 0,
    name: ''
  });

  // Could this be dymanic? Should probably be handled in useForm hook instead.
  const availableInputs = ['message', 'title', 'name'];

  const { values, handleChange, handleSubmit, setValues } = useForm();

  // There is alot of logic going on below. Rewrite this.
  return (
    <Mutation
      mutation={ADD_MESSAGE}
      variables={values}
      refetchQueries={[
        {
          query: GET_ALL_MESSAGES
        }
      ]}
      onCompleted={() => {
        setValues({});
        setStep({
          count: 0,
          name: ''
        });
      }}
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
            loading
          }}
        >
          <MessageForm onSubmit={e => handleSubmit(e, addMessage)}>
            <StepButton direction="back">
              <MdChevronLeft />
            </StepButton>
            <FormSteps count={step.count} />
            {step.count !== availableInputs.length - 1 && (
              <StepButton direction="forward">
                <MdChevronRight />
              </StepButton>
            )}
            {error ? (
              <ErrorMessage>{trimErrorMessage(error.message)}</ErrorMessage>
            ) : null}
          </MessageForm>
        </FormContext.Provider>
      )}
    </Mutation>
  );
};

export default Form;
