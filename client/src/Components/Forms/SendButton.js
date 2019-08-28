import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import styled from '@emotion/styled';
import { MessageFormContext } from '../../context/message-context';
import { ADD_MESSAGE, GET_ALL_MESSAGES } from '../../gql/gql';
import { ErrorMessage } from '../StatusPage';

const SendButton = styled.button`
  color: ${({ theme }) => theme.whiteVariant};
  margin: 1rem 0.1rem;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 900;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px 0 hsla(0, 0%, 0%, 0.1);
  background-size: 200% 200%;
  letter-spacing: 1px;
  background: ${({ theme }) => theme.color.primary.hex};
  &:hover {
    background-size: 100% 100%;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.1);
  }
  ${p => p.theme.isMobile} {
    box-shadow: none;
    border-radius: 0;
  }
`;

const FormButton = ({ className }) => {
  const {
    values,
    handleSubmit,
    setValues,
    isFormOpen,
    toggleFormOpen,
    stateInit
  } = useContext(MessageFormContext);

  const submitMessage = (e, mutation) => {
    e.preventDefault();
    if (isFormOpen) {
      handleSubmit(e, mutation);
      return;
    }
  };
  const onCompleted = () => {
    setValues(stateInit);
    toggleFormOpen(isFormOpen => false);
  };

  const [addMessage, { error, loading }] = useMutation(ADD_MESSAGE, {
    variables: values,
    refetchQueries: [
      {
        query: GET_ALL_MESSAGES
      }
    ],
    onCompleted: onCompleted
  });

  return (
    <>
      {error ? <ErrorMessage error={error.message} /> : null}
      <SendButton
        className={className}
        onClick={e => submitMessage(e, addMessage)}
      >
        POST{loading ? 'ing' : null}
      </SendButton>
    </>
  );
};

export default FormButton;
