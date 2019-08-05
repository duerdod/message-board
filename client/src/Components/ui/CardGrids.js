import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

// Shared between the two "main" elements.
const sharedStyles = css`
  display: grid;
  grid-gap: 1rem;
  max-width: 1200px;
  padding: 2rem;
  margin: 0 auto;
  transition: all 0.2s ease;

  > div {
    will-change: transform;
  }
  @media screen and (max-width: 40em) {
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
`;

const MessagesGrid = styled.main`
  ${sharedStyles}
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

const InformationGrid = styled.main`
  ${sharedStyles}

  > div {
    display: grid;
    grid-gap: 1rem;
  }

  .information-card {
    background: ${({ theme }) => theme.white};
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 2rem;
    text-transform: uppercase;
  }
`;

const CardGrids = ({ isInformationVisible, children }) =>
  isInformationVisible ? (
    <InformationGrid>{children}</InformationGrid>
  ) : (
    <MessagesGrid>{children}</MessagesGrid>
  );

export default CardGrids;
