import React from 'react';
import styled from '@emotion/styled';
import { ApolloConsumer } from 'react-apollo';
import { GET_ALL_MESSAGES } from '../../gql/gql';
import { ReactComponent as Refresh } from '../../svg/Burger.svg';
import ButtonStyle from './Button';

const Button = styled.button`
  ${ButtonStyle}
  border: 3px solid ${({ theme }) => theme.lightRed};
  padding: 0.1rem 0.5rem;
  width: 20%;
  svg {
    stroke: ${({ theme }) => theme.white};
    width: 50%;
  }
`;

const RefreshButton = () => {
  return (
    <ApolloConsumer>
      {client => (
        <Button
          type="button"
          onClick={async () => {
            // Not sure if this even works. Or how to test it.
            // Anyway. Querying all messages...
            const { data } = await client.query({
              query: GET_ALL_MESSAGES
            });
            // Write them to cache.
            client.cache.writeQuery({ query: GET_ALL_MESSAGES, data });
          }}
          // Probably doesn't update the ui. Remove or rewrite.
        >
          <Refresh />
        </Button>
      )}
    </ApolloConsumer>
  );
};

export default RefreshButton;
