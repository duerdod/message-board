import React from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_MESSAGES } from '../../gql/gql';
import CardAnimation from '../ui/CardAnimation';
import Message from './Message';
import Status from '../StatusPage';

const Messages = () => (
  <Query query={GET_ALL_MESSAGES}>
    {({ error, loading, data }) => {
      if (error) return <Status state={error && 'error'} />;
      if (loading) return <Status state={loading && 'loading'} />;
      return (
        <CardAnimation
          className="message"
          items={data.messages}
          render={item => {
            return <Message message={item} />;
          }}
        />
      );
    }}
  </Query>
);

export default Messages;
