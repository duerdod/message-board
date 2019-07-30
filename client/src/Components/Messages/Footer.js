import React from 'react';
import styled from '@emotion/styled';

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 0;
  background: ${({ theme }) => theme.bgvariant};
`;

const Footer = () => {
  return <Container>hej</Container>;
};

export default Footer;
