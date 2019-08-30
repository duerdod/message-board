import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from '@emotion/styled';
import { GET_SINGLE_MESSAGE } from '../../../gql/gql';
import Message from '../Message';
import Comment from './Comment';
import CommentToMessage from './CommentToMessage';
import StatusPage from '../../StatusPage';

const MessageContainer = styled.section`
  max-width: 650px;
  margin: 0 auto;
  position: relative;
  padding: 1rem 0;
  border: 1px solid ${({ theme }) => theme.color.white.tint[0]};
  > div.message {
    border-radius: 0px;
    box-shadow: none;
    border-radius: 3px;
    > footer {
      /* background: transparent;
      border-top: 0; */
    }
  }
`;

const CommentContainer = styled.ul`
  background: ${({ theme }) => theme.color.white.tint[9]};
  padding: 1rem;
  margin-bottom: 2rem;
`;

const Comments = props => {
  const { id } = props.match.params;
  const { history } = props;
  const { data, error, loading } = useQuery(GET_SINGLE_MESSAGE, {
    variables: { id }
  });

  if (error) return <StatusPage state={error && 'error'} />;
  if (loading) return <StatusPage state={loading && 'loading'} />;

  return (
    <MessageContainer>
      <Message message={data.message} />
      <CommentToMessage id={id} history={history} />
      <CommentContainer>
        <Comment comments={data.message.comments} />
      </CommentContainer>
    </MessageContainer>
  );
};

export default Comments;
