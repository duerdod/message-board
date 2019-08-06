import React from 'react';
import styled from '@emotion/styled';

const MessagesGrid = styled.main`
  display: grid;
  grid-gap: 1rem;
  max-width: 1200px;
  padding: 2rem;
  margin: 0 auto;
  transition: all 0.2s ease;

  @media screen and (max-width: 50em) {
    grid-template-columns: 1fr;
    grid-gap: 0rem;
    padding: 0rem;
    .message {
      box-shadow: none !important;
      border-radius: 0;
      border-top: 1px solid #f4f3f3;
    }
    > div {
      grid-template-columns: 1fr !important;
      padding: 0.3rem;
    }
  }
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));

  .message {
    background: ${({ theme }) => theme.white};
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transition: all 0.2s ease;
    &.expanded {
      grid-row: span 2;
    }
  }
`;

const CardGrid = ({ children }) => <MessagesGrid>{children}</MessagesGrid>;

export default CardGrid;
