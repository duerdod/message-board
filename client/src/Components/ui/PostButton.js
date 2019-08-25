import React, { useContext } from 'react';
// import styled from '@emotion/styled';
// import Button from '../ui/Button';
import { MessageFormContext } from '../../context/message-context';
import Button from './Button';

// const StyledPostButton = styled(ThemeButton)`
//   padding: 1rem 4rem;
//   width: 66px;
//   display: flex;
//   justify-content: center;
// `;

const PostButton = ({ history }) => {
  const { isFormOpen, toggleFormOpen } = useContext(MessageFormContext);

  return (
    <Button
      color="primary"
      size="large"
      onClick={() => {
        if (window.location.href.includes('message')) {
          history.replace('/');
          toggleFormOpen(true);
        } else {
          toggleFormOpen(isFormOpen => !isFormOpen);
        }
      }}
    >
      {isFormOpen ? 'DISCARD' : 'POST'}
    </Button>
  );
};

export default PostButton;
