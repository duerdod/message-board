import React from 'react';
import styled from '@emotion/styled';
import { Mutation } from 'react-apollo';
import { COMMENT_MESSAGE, GET_SINGLE_MESSAGE } from '../../../gql/gql';
import useForm from '../../../hooks/useForm';
import { Label } from '../../Forms/FormInputs';
import { MessageForm } from '../../Forms/Form';
import ThemeButton from '../../ui/ThemeButton';
import StatusPage, { ErrorMessage } from '../../StatusPage';

const StyledMessageForm = styled(MessageForm)`
  background: ${({ theme }) => theme.white};
  display: block;
  padding: 1.2rem 1rem;
  textarea {
    display: block;
    margin: 0;
    margin: 0.6rem;
  }
  > button {
    display: block;
    margin: 1rem auto;
  }
`;

const CommentToMessage = ({ id }) => {
  const stateInit = {
    comment: '',
    author: ''
  };
  const { values, handleChange, handleSubmit, isValid } = useForm(stateInit);
  return (
    <Mutation
      mutation={COMMENT_MESSAGE}
      variables={{ id, comment: values.comment, author: values.author }}
      refetchQueries={[
        {
          query: GET_SINGLE_MESSAGE,
          variables: { id }
        }
      ]}
    >
      {(commentMessage, { data, error, loading }) => {
        if (error) return <StatusPage state={error && 'error'} />;
        if (loading) return <StatusPage state={loading && 'loading'} />;
        return (
          <StyledMessageForm>
            <Label>
              <textarea
                placeholder="comment"
                name="comment"
                id="comment"
                maxLength="200"
                onChange={handleChange}
              />
            </Label>
            <Label>
              <textarea
                placeholder="name"
                name="author"
                id="author"
                maxLength="50"
                onChange={handleChange}
              />
            </Label>
            {error ? <ErrorMessage>{error.message}</ErrorMessage> : null}
            <ThemeButton
              onClick={e => (isValid ? handleSubmit(e, commentMessage) : null)}
            >
              COMMENT
            </ThemeButton>
          </StyledMessageForm>
        );
      }}
    </Mutation>
  );
};

export default CommentToMessage;
