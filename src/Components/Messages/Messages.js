import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from '@emotion/styled';
import Message from './Message';

const GET_ALL_MESSAGES = gql`
  query GET_ALL_MESSAGES {
    messages {
      id
      title
      message
      author
      date
    }
  }
`;

const MessagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  /* background: #fafafa; */
`;

const Messages = () => {
  return (
    <MessagesContainer>
      <Query query={GET_ALL_MESSAGES}>
        {({ data, loading, error }) => {
          if (error) return 'Error';
          if (loading) return 'Loading';
          return data.messages.map(message => (
            <Message key={message.id} message={message} />
          ));
        }}
      </Query>
    </MessagesContainer>
  );
};

export default Messages;
