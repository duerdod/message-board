import React from 'react';
import { Query } from 'react-apollo';
import styled from '@emotion/styled';
import { GET_SINGLE_MESSAGE } from '../../../gql/gql';
import Message from '../Message';
import Comment from './Comment';
import StatusPage from '../../StatusPage';

const CommentsContainer = styled.section`
  > div {
    border-radius: 0px;
    box-shadow: none;
    border-top: 1px solid ${({ theme }) => theme.lightGrey};
    border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  }
`;

const CommentContainer = styled.ul`
  background: ${({ theme }) => theme.white};
  box-shadow: 0 7px 6px -6px hsla(0, 0%, 0%, 0.15);
  padding: 1rem;

  @media screen and (max-width: 64em) {
    /* border-radius: 0px; */
  }
`;

const Comments = props => {
  // const { id } = props.match.params;
  // Is this koscher?
  const { state } = props.location;
  return (
    <Query query={GET_SINGLE_MESSAGE} variables={{ id: state }}>
      {({ data, error, loading }) => {
        if (error) return <StatusPage state={error && 'error'} />;
        if (loading) return <StatusPage state={loading && 'loading'} />;
        return (
          <>
            <CommentsContainer>
              <Message message={data.message} />
              <CommentContainer>
                <Comment />
              </CommentContainer>
            </CommentsContainer>
          </>
        );
      }}
    </Query>
  );
};

export default Comments;
