import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';

const CommentContainer = styled.li`
  border-top: 1px solid ${({ theme }) => theme.color.grey.tint[9]};
`;

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
  background: ${({ theme }) => theme.color.grey.hex};
`;

const Comment = ({ comments }) =>
  comments.map(comment => (
    <CommentContainer key={comment.id}>
      <Header message={comment} />
      <CommentText>
        <p>{comment.comment}</p>
      </CommentText>
      <Footer />
    </CommentContainer>
  ));

export default Comment;
