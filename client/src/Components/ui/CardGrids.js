import React from 'react';
import styled from '@emotion/styled';

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  ${p =>
    p.gridType &&
    `
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: end;

    .dashboard-container {
      grid-column: span 2;
    }
  `}

  .message {
    &.expanded {
      grid-row: span 2;
    }
    .content {
      height: 150px;
      &.expanded {
        height: auto;
      }
    }
  }
  > div {
    will-change: transform;
  }
  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr;
    padding: 0.3rem;
  }
`;

const CardGrids = ({ informationGrid, children }) => (
  <Container gridType={informationGrid}>{children}</Container>
);

export default CardGrids;
