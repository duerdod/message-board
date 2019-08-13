import React, { useContext } from 'react';
import styled from '@emotion/styled';
import ThemeButton from '../ui/ThemeButton';
import { MessageFormContext } from '../../context/message-context';

const StyledPostButton = styled(ThemeButton)`
  padding: 1rem 4rem;
`;

const PostButton = ({ history }) => {
  const { isFormOpen, toggleFormOpen } = useContext(MessageFormContext);
  console.log(history);
  return (
    <StyledPostButton
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
    </StyledPostButton>
  );
};

export default PostButton;
