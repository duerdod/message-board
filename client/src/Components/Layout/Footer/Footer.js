import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  height: 200px;
  /* background: ${({ theme }) => theme.pink}; */
  margin: 0;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.lightGrey};
  display: flex;
  justify-content: center;
  h2 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.lightRed};

    font-weight: 900;
    align-self: flex-end;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h2>hej hi hallu hello yoyo</h2>
    </FooterContainer>
  );
};

export default Footer;
