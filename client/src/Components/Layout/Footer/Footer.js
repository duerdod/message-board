import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  height: 200px;
  background: ${({ theme }) => theme.white};
  margin: 0;
  padding: 1rem;
`;

const SomeText = styled.h2`
  color: ${({ theme }) => theme.lightRed};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SomeText>HI</SomeText>
    </FooterContainer>
  );
};

export default Footer;
