import React from 'react';
import { Query } from 'react-apollo';
import styled from '@emotion/styled';
import { GET_SINGLE_MESSAGE } from '../../../gql/gql';
import Message from '../Message';
import Comment from './Comment';
import CommentToMessage from './CommentToMessage';
import StatusPage from '../../StatusPage';
import { CommentsContainer } from '../../ui/CommentsContainer';

const CommentContainer = styled.ul`
  background: ${({ theme }) => theme.white};
  box-shadow: 0 7px 6px -6px hsla(0, 0%, 0%, 0.15);
  padding: 1rem;
`;

const Comments = props => {
  const { id } = props.match.params;
  const { history } = props;
  return (
    <Query query={GET_SINGLE_MESSAGE} variables={{ id }}>
      {({ data, error, loading }) => {
        if (error) return <StatusPage state={error && 'error'} />;
        if (loading) return <StatusPage state={loading && 'loading'} />;
        return (
          <>
            <CommentsContainer>
              <Message message={data.message} />
              <CommentContainer>
                <Comment comments={data.message.comments} />
              </CommentContainer>
              <CommentToMessage id={id} history={history} />
            </CommentsContainer>
          </>
        );
      }}
    </Query>
  );
};

export default Comments;
