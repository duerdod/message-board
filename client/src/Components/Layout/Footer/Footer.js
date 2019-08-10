import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  height: 200px;
  background: ${({ theme }) => theme.white};
  margin: 0;
  padding: 1rem;
`;

const Footer = () => {
  return <FooterContainer />;
};

export default Footer;
