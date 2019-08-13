import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  height: 200px;
  background: ${({ theme }) => theme.pink};
  margin: 0;
  padding: 1rem;
  h2 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.lightRed};
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h2>hej hi hallu hello yo</h2>
    </FooterContainer>
  );
};

export default Footer;
