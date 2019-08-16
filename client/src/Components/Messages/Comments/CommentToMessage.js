import React from 'react';
import styled from '@emotion/styled';
import { useMutation } from '@apollo/react-hooks';
import { COMMENT_MESSAGE, GET_SINGLE_MESSAGE } from '../../../gql/gql';
import useForm from '../../../hooks/useForm';
import ThemeButton from '../../ui/ThemeButton';
import StatusPage, { ErrorMessage } from '../../StatusPage';
import useUser from '../../../hooks/useUser';

const StyledMessageForm = styled.form`
  background: ${({ theme }) => theme.white};
  display: block;
  padding: 1.2rem 1rem;
  textarea {
    display: block;
    margin: 0;
    margin: 0.6rem;
    width: 100%;
    font-family: ${({ theme }) => theme.sansSerif};
    font-size: 0.85rem;
    line-height: 35px;
  }
  > div {
    > {
      button {
        padding: 1rem 2rem;
        svg {
          height: 24px;
        }
      }
    }
  }
`;

const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.black};
  width: 100%;
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    display: block;
    background-color: ${({ theme }) => theme.lightPink};
  }
  .labeltext {
    color: ${({ theme }) => theme.grey};
    font-size: 0.75rem;
  }
`;

const CommentToMessage = ({ id, history }) => {
  const { user } = useUser();
  const stateInit = {
    comment: '',
    author: (user && user.username) || ''
  };
  const { values, handleChange, handleSubmit, isValid } = useForm(stateInit);

  const [commentMessage, { loading, error }] = useMutation(COMMENT_MESSAGE, {
    variables: { id, comment: values.comment, author: values.author },
    refetchQueries: [
      {
        query: GET_SINGLE_MESSAGE,
        variables: { id }
      }
    ]
  });

  if (error) return <StatusPage state={error && 'error'} />;
  if (loading) return <StatusPage state={loading && 'loading'} />;

  return (
    <StyledMessageForm>
      <Label>
        <span className="labeltext">name</span>
        <textarea
          name="author"
          id="author"
          maxLength="50"
          value={(user && user.username) || values.author}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <span className="labeltext">comment</span>
        <textarea
          name="comment"
          id="comment"
          maxLength="200"
          onChange={handleChange}
        />
      </Label>
      {error ? <ErrorMessage>{error.message}</ErrorMessage> : null}
      <div>
        <ThemeButton
          onClick={e => (isValid ? handleSubmit(e, commentMessage) : null)}
        >
          COMMENT{loading ? 'ing' : null}
        </ThemeButton>
      </div>
    </StyledMessageForm>
  );
};

export default CommentToMessage;
