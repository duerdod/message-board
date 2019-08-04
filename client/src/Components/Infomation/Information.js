import React from 'react';
import styled from '@emotion/styled';
import CardAnimation from '../ui/CardAnimation';

const hej = [
  { id: 1, header: 'R' },
  { id: 2, header: 'U' },
  { id: 3, header: 'L' },
  { id: 4, header: 'E' },
  { id: 5, header: 'S' },
  {
    id: 6,
    message:
      'njej jda dadad adwdwaok oadkok aowkdap kwpodkoawkdpkakd daodkowpakd kaodkapdkaokdaowdk odkawodkaopwdk'
  }
];

const InformationHeader = styled.div`
  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.darkGreen};
  }
  .big-message {
  }
`;

const Information = () => {
  return (
    <CardAnimation
      className="information-card"
      items={hej}
      render={information => {
        return (
          <InformationHeader>
            <h2>{information.header}</h2>
            <div className="big-message">
              <p>{information.message}</p>
            </div>
          </InformationHeader>
        );
      }}
    />
  );
};

export default Information;
