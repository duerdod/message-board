import React from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_MESSAGES } from '../../gql/gql';
import styled from '@emotion/styled';
import Message from './Message';
import Status from '../StatusPage';

const MessagesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 1rem;
  max-width: 1200px;
  padding: 2rem;
  margin: 0 auto;
  transition: all 0.2s ease;
    &.expanded {
      grid-row: span 2;
    }
  }

  @media screen and (max-width: 64em) {
    grid-template-columns: 1fr;
    grid-gap: 0rem;
    padding: 0rem;
    .message {
      box-shadow: none;
      border-radius: 0;
      border-top: 1px solid #f4f3f3;
    }
  }
`;

const Messages = () => {
  return (
    <Query query={GET_ALL_MESSAGES}>
      {({ error, loading, data }) => {
        if (error) return <Status state={error && 'error'} />;
        if (loading) return <Status state={loading && 'loading'} />;
        const { messages } = data;
        return (
          <MessagesGrid>
            {messages.map(message => (
              <Message key={message.id} message={message} />
            ))}
          </MessagesGrid>
        );
      }}
    </Query>
  );
};

export default Messages;
