import React from 'react';
import styled from '@emotion/styled';
import Dislike from './Dislike';

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 0.5rem;
  background: ${({ theme }) => theme.lightGrey};
  border-top: 1px solid #e7e7e7;
  margin-top: auto;
  > * {
    font-size: 0.75rem;
  }
`;

const Footer = ({ id, dislikes }) => {
  return (
    <Container>
      <Dislike id={id} dislikes={dislikes} />
    </Container>
  );
};

export default Footer;
