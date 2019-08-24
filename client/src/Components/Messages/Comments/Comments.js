import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from '@emotion/styled';
import { GET_SINGLE_MESSAGE } from '../../../gql/gql';
import Message from '../Message';
import Comment from './Comment';
import CommentToMessage from './CommentToMessage';
import StatusPage from '../../StatusPage';
import { CommentsContainer } from '../../ui/CommentsContainer';

const CommentContainer = styled.ul`
  background: ${({ theme }) => theme.whiteVariant};
  padding: 1rem;
  margin-bottom: 2rem;
  /* background: #f9f9f9; */
  /* border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  border-right: 1px solid ${({ theme }) => theme.lightGrey};
  border-left: 1px solid ${({ theme }) => theme.lightGrey}; */
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
    <CommentsContainer>
      <Message message={data.message} />
      <CommentToMessage id={id} history={history} />
      <CommentContainer>
        <Comment comments={data.message.comments} />
      </CommentContainer>
    </CommentsContainer>
  );
};

export default Comments;
