import React, { useContext } from 'react';
import styled from '@emotion/styled';
import ThemeButton from '../ui/ThemeButton';
import { MessageFormContext } from '../../context/message-context';

const StyledPostButton = styled(ThemeButton)`
  padding: 1rem 4rem;
`;

const PostButton = () => {
  const { isFormOpen, toggleFormOpen } = useContext(MessageFormContext);
  return (
    <StyledPostButton onClick={() => toggleFormOpen(isFormOpen => !isFormOpen)}>
      {isFormOpen ? 'DISCARD' : 'POST'}
    </StyledPostButton>
  );
};

export default PostButton;
