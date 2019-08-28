import React, { useContext } from 'react';
import { MessageFormContext } from '../../context/message-context';
import Button from './Button';

const PostButton = ({ history, isStartPage }) => {
  const { isFormOpen, toggleFormOpen } = useContext(MessageFormContext);
  return (
    <Button
      color="primary"
      size="large"
      onClick={() => {
        if (!isStartPage) {
          history.replace('/');
          toggleFormOpen(true);
        } else {
          toggleFormOpen(isFormOpen => !isFormOpen);
        }
      }}
    >
      {isFormOpen && isStartPage ? 'DISCARD' : 'POST'}
    </Button>
  );
};

export default PostButton;
