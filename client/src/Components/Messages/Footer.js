import React from 'react';
import styled from '@emotion/styled';

const Container = styled.footer`
  grid-area: footer;
  padding: 0.5rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  > * {
    font-size: 0.65rem;
    color: ${({ theme }) => theme.dark};
  }
`;

const Footer = () => {
  return <Container />;
};

export default Footer;
