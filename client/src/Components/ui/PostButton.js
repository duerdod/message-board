import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { MessageFormContext } from '../../context/message-context';
import Button from './Button';

const StyledPostButton = styled(Button)`
  .menu-open {
    background: #000;
  }
`;

const PostButton = ({ history, location }) => {
  const { isFormOpen, toggleFormOpen } = useContext(MessageFormContext);
  const isPostPage = location.pathname === '/';
  return (
    <StyledPostButton
      color="primary"
      size="large"
      onClick={() => {
        if (isPostPage) {
          history.replace('/');
          toggleFormOpen(true);
        } else {
          toggleFormOpen(isFormOpen => !isFormOpen);
        }
      }}
    >
      {isFormOpen && isPostPage ? 'DISCARD' : 'POST'}
    </StyledPostButton>
  );
};

export default PostButton;
