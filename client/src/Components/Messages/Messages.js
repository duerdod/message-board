import React, { useContext } from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_MESSAGES } from '../../gql/gql';
import MessagesGrid from '../ui/MessagesGrid';
import Message from './Message';
import Status from '../StatusPage';
import MessageForm from '../Forms/MessageForm';
import { MessageFormContext } from '../../context/message-context';

const Messages = () => {
  const { isFormOpen } = useContext(MessageFormContext);
  return (
    <Query query={GET_ALL_MESSAGES}>
      {({ error, loading, data }) => {
        if (error) return <Status state={error && 'error'} />;
        if (loading) return <Status state={loading && 'loading'} />;
        const { messages } = data;
        return (
          <MessagesGrid>
            {isFormOpen ? <MessageForm /> : null}
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
