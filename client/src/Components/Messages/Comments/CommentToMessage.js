import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useMutation } from '@apollo/react-hooks';
import { COMMENT_MESSAGE, GET_SINGLE_MESSAGE } from '../../../gql/gql';
import useForm from '../../../hooks/useForm';
import ThemeButton from '../../ui/ThemeButton';
import { ErrorMessage } from '../../StatusPage';
import useUser from '../../../hooks/useUser';
import { ReactComponent as Person } from '../../../svg/Person2.svg';

const CommentButton = styled(ThemeButton)`
  background: ${({ theme }) => theme.green};
  border: 1px solid ${({ theme }) => theme.darkGreen};
  width: 2 0%;
  margin: 1rem auto;
`;

const Avatar = styled(Person)`
  stroke: #383838;
`;

const StyledForm = styled.form`
  background: ${({ theme }) => theme.whiteVariant};
  padding: 1rem;

  .inner-form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar {
    margin-right: 18px;
  }

  input {
    background: ${({ theme }) => theme.white};
    /* height: 45px; */
    padding: 1rem;
    border-radius: 3px;
    width: 60%;
    border: 1px solid #dedede;
  }

  .comment-button {
    display: block;
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
      <div className="inner-form">
        <span className="avatar">
          <Avatar />
        </span>
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
      </div>
      <CommentButton
        disabled={loading}
        className="comment-button"
        onClick={e => {
          if (step === 1) {
            handleSubmit(e, commentMessage);
          }
          handleForwardStep();
        }}
      >
        comment
      </CommentButton>
    </StyledForm>
  );
};

export default CommentToMessage;
