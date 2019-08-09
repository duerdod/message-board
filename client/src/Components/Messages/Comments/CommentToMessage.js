import React from 'react';
import styled from '@emotion/styled';
import { Mutation } from 'react-apollo';
import { COMMENT_MESSAGE, GET_SINGLE_MESSAGE } from '../../../gql/gql';
import useForm from '../../../hooks/useForm';
// import { Label } from '../../Forms/FormInputs';
import { MessageForm } from '../../Forms/Form';
import ThemeButton from '../../ui/ThemeButton';
import StatusPage from '../../StatusPage';

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
  const { values, handleChange, handleSubmit } = useForm(stateInit);
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
            <textarea
              placeholder="comment"
              name="comment"
              id="comment"
              onChange={handleChange}
            />

            <textarea
              placeholder="name"
              name="author"
              id="author"
              onChange={handleChange}
            />

            <ThemeButton onClick={e => handleSubmit(e, commentMessage)}>
              COMMENT
            </ThemeButton>
          </StyledMessageForm>
        );
      }}
    </Mutation>
  );
};

export default CommentToMessage;
