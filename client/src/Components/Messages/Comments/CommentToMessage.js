import React from 'react';
import styled from '@emotion/styled';
import { Mutation } from 'react-apollo';
import { COMMENT_MESSAGE, GET_SINGLE_MESSAGE } from '../../../gql/gql';
import useForm from '../../../hooks/useForm';
import ThemeButton from '../../ui/ThemeButton';
import StatusPage, { ErrorMessage } from '../../StatusPage';
import { ReactComponent as Chevron } from '../../../svg/ChevronLeft.svg';

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
  }
  > div {
    display: flex;
    justify-content: center;
    > {
      button {
        padding: 0.3rem 2rem;
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
`;

const CommentToMessage = ({ id, history }) => {
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

            <div>
              <ThemeButton onClick={() => history.replace('/')}>
                <Chevron />
              </ThemeButton>
              <ThemeButton
                onClick={e =>
                  isValid ? handleSubmit(e, commentMessage) : null
                }
              >
                COMMENT
              </ThemeButton>
            </div>
          </StyledMessageForm>
        );
      }}
    </Mutation>
  );
};

export default CommentToMessage;
