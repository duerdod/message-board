import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import { ReactComponent as Chevron } from '../../svg/ChevronLeft.svg';

const StyledBackButton = styled(Button)`
  padding: 0.53rem 0.5rem;
  display: flex;
  justify-content: center;
  svg {
    /* width: 12px;
    height: 12px; */
  }
`;

const PostButton = ({ history }) => (
  <StyledBackButton color="primary" onClick={() => history.replace('/')}>
    <Chevron />
  </StyledBackButton>
);

export default PostButton;
