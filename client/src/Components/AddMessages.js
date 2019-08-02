import React from 'react';
import styled from '@emotion/styled';
import { Mutation } from 'react-apollo';
import { FiSend } from 'react-icons/fi';
import Button from './ui/Button';
import config from '../config';
import { charCounter, trimErrorMessage } from '../utils/utils';
import useForm from '../hooks/useForm';
import { ADD_MESSAGE, GET_ALL_MESSAGES } from '../gql/gql';
import { ErrorMessage } from './StatusPage';

const MessageForm = styled.form`
  width: 100%;

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

const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.black};
  width: 90%;
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    display: block;
    background-color: ${({ theme }) => theme.darkGreen};
  }
  .counter {
    text-align: right;
    margin: 0;
    font-size: 0.65rem;
    color: ${({ theme }) => theme.darkGreen};
  }
`;

const Textarea = styled.textarea`
  transition: 'all .2s ease';
  overflow: hidden;
`;

const AddMessages = () => {
  const { values, handleChange, handleSubmit, setValues } = useForm();
  // Passed to charCounter fn.
  let textFieldLength = values && values.message ? values.message.length : 0;
  // For increasing textfield height.
  const increaseHeight = e => {
    const { scrollHeight, clientHeight } = e.target;
    if (scrollHeight > clientHeight) {
      e.target.style.height = `${scrollHeight}px`;
    }
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
      onCompleted={() => setValues({})}
    >
      {(addMessage, { error, loading }) => {
        return (
          <MessageForm
            onSubmit={e => {
              handleSubmit(e, addMessage);
            }}
          >
            <Label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                maxLength="50"
                value={values.title || ''}
                required
                onChange={handleChange}
              />
            </Label>
            <Label>
              <Textarea
                placeholder="Message"
                name="message"
                maxLength={config.messageLength}
                value={values.message || ''}
                required
                onChange={e => {
                  handleChange(e);
                  increaseHeight(e);
                }}
                style={{ transition: 'all .2s ease', overflow: 'hidden' }}
              />
              <p className="counter">
                {charCounter(textFieldLength, config.messageLength)}
              </p>
            </Label>
            <Label>
              <input
                type="text"
                placeholder="Name"
                name="author"
                maxLength="50"
                value={values.author || ''}
                required
                onChange={handleChange}
              />
            </Label>
            {error ? (
              <ErrorMessage>{trimErrorMessage(error.message)}</ErrorMessage>
            ) : null}
            <Button type="submit" disabled={loading}>
              Post{loading ? 'ing' : null}
              <FiSend style={{ marginLeft: '4px' }} />
            </Button>
          </MessageForm>
        );
      }}
    </Mutation>
  );
};

export default AddMessages;
