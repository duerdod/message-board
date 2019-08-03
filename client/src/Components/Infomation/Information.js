import React from 'react';
import styled from '@emotion/styled';
import CardAnimation from '../ui/CardAnimation';

const hej = [
  { id: 1, header: 'R', message: 'hejhej' },
  { id: 2, header: 'U', message: 'hejhej' },
  { id: 3, header: 'L', message: 'hejhej' },
  { id: 4, header: 'E', message: 'hejhej' },
  { id: 5, header: 'S', message: 'hejhej' }
];

const InformationHeader = styled.div`
  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.darkGreen};
  }
`;

const Information = ({ isInformationVisible }) => {
  return (
    isInformationVisible && (
      <CardAnimation
        className="information-card"
        items={hej}
        render={information => {
          return (
            <InformationHeader>
              <h2>{information.header}</h2>
            </InformationHeader>
          );
        }}
      />
    )
  );
};

export default Information;
