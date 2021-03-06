import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as CommentsIcon } from '../../../svg/Comments.svg';

const CommentsContainer = styled.label`
  transition: all 0.4s ease;
  padding: 0.2rem 0.2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const CommentsCount = styled.span`
  font-size: 0.65rem;
  opacity: 0.7;
  margin-left: 4px;
`;

const StyledCommentsIcon = styled(CommentsIcon)`
  color: ${({ theme }) => theme.color.secondary.tint[3]};
  fill: ${({ theme }) => theme.color.secondary.tint[3]};
  width: 16px;
  stroke: none;
`;

const Comments = ({ comments }) => (
  <CommentsContainer>
    <StyledCommentsIcon />
    <CommentsCount>{comments ? comments.length : 0}</CommentsCount>
  </CommentsContainer>
);

export default Comments;
