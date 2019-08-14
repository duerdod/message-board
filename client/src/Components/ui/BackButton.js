import React from 'react';
import styled from '@emotion/styled';
import ThemeButton from '../ui/ThemeButton';
import { ReactComponent as Chevron } from '../../svg/ChevronLeft.svg';

const StyledBackButton = styled(ThemeButton)`
  padding: 0.7rem 0.5rem;

  display: flex;
  justify-content: center;
  svg {
    /* width: 12px;
    height: 12px; */
  }
`;

const PostButton = ({ history }) => (
  <StyledBackButton onClick={() => history.replace('/')}>
    <Chevron />
  </StyledBackButton>
);

export default PostButton;
