import React, { useContext } from 'react';
import { Mutation } from 'react-apollo';
import styled from '@emotion/styled';
import { MessageFormContext } from '../../context/message-context';
import { ADD_MESSAGE, GET_ALL_MESSAGES } from '../../gql/gql';

const SendButtonStyle = styled.button`
  color: ${({ theme }) => theme.white};
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
  background: ${({ theme }) => theme.green};
  &:hover {
    background-size: 100% 100%;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.1);
  }
  @media screen and (max-width: 63em) {
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
    toggleFormOpen
  } = useContext(MessageFormContext);

  const submitMessage = (e, mutation) => {
    e.preventDefault();

    if (!isFormOpen) {
      toggleFormOpen(true);
      return;
    } else {
      handleSubmit(e, mutation);
      toggleFormOpen(false);
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
      {(addMessage, { error, loading }) => (
        <SendButtonStyle
          className={className}
          onClick={e => submitMessage(e, addMessage)}
        >
          POST
        </SendButtonStyle>
      )}
    </Mutation>
  );
};

export default FormButton;