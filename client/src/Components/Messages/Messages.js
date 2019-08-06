import React from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_MESSAGES } from '../../gql/gql';
import Message from './Message';
import Status from '../StatusPage';

const Messages = () => {
  return (
    <Query query={GET_ALL_MESSAGES}>
      {({ error, loading, data }) => {
        if (error) return <Status state={error && 'error'} />;
        if (loading) return <Status state={loading && 'loading'} />;
        const { messages } = data;
        return messages.map(message => (
          <Message key={message.id} message={message} />
        ));
      }}
    </Query>
  );
};

export default Messages;
