import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';

const CommentContainer = styled.li``;

const CommentText = styled.div`
  padding: 0.1rem 1.5rem;
  width: 100%;
  p {
    margin: 1rem 0;
    font-size: 0.85rem;
    font-weight: 300;
    word-wrap: break-word;
  }
`;

const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.lightGrey};
`;

const Comment = ({ comments }) => {
  return comments.map((comment, i) => (
    <CommentContainer key={i}>
      <Header message={comment} />
      <CommentText>
        <p>{comment.comment}</p>
      </CommentText>
      <Footer />
    </CommentContainer>
  ));
};

export default Comment;
