import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useMutation } from '@apollo/react-hooks';
import { COMMENT_MESSAGE, GET_SINGLE_MESSAGE } from '../../../gql/gql';
import useForm from '../../../hooks/useForm';
import Button from '../../ui/Button';
import { ErrorMessage } from '../../StatusPage';
import useUser from '../../../hooks/useUser';
import { ReactComponent as Person } from '../../../svg/Person2.svg';

const Avatar = styled(Person)`
  stroke: #383838;
`;

const StyledForm = styled.form`
  background: ${({ theme }) => theme.color.white.tint[6]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .avatar {
    margin-right: 1rem;
  }

  input {
    background: ${({ theme }) => theme.color.white.hex};
    /* height: 45px; */
    padding: 1rem;
    border-radius: 3px;
    width: 50%;
    border: 1px solid #dedede;
    margin: 0 0.7rem;
  }

  .comment-button {
    display: block;
    font-size: 0.6rem;
  }
`;

const CommentToMessage = ({ id, history }) => {
  const { user } = useUser();
  const formInit = {
    comment: '',
    author: (user && user.username) || ''
  };
  const { values, handleChange, handleSubmit } = useForm(formInit);

  const [step, setStep] = useState(0);

  const [commentMessage, { loading, error }] = useMutation(COMMENT_MESSAGE, {
    variables: { id, comment: values.comment, author: values.author },
    refetchQueries: [
      {
        query: GET_SINGLE_MESSAGE,
        variables: { id }
      }
    ]
  });

  const handleForwardStep = () => {
    setStep(step => (step + 1) % 2);
  };

  console.log(values);

  return (
    <StyledForm>
      <Avatar />
      {step === 0 && (
        <input
          type="text"
          name="comment"
          placeholder="Add comment to message..."
          onChange={handleChange}
        />
      )}
      {step === 1 && (
        <input
          type="text"
          name="author"
          placeholder={values.author || 'Also, your name.'}
          value={(user && user.username) || values.author || ''}
          onChange={handleChange}
        />
      )}
      {error ? <ErrorMessage>{error.message}</ErrorMessage> : null}
      <Button
        color="primary"
        size="xsmall"
        disabled={loading}
        className="comment-button"
        onClick={e => {
          step === 1 ? handleSubmit(e, commentMessage) : handleForwardStep();
        }}
      >
        comment
      </Button>
    </StyledForm>
  );
};

export default CommentToMessage;
