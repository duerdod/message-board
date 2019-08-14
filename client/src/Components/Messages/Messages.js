import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_MESSAGES } from '../../gql/gql';
import MessagesGrid from '../ui/MessagesGrid';
import Message from './Message';
import StatusPage from '../StatusPage';
import MessageForm from '../Forms/MessageForm';
import { MessageFormContext } from '../../context/message-context';

const Messages = () => {
  const { isFormOpen } = useContext(MessageFormContext);
  const { error, data, loading } = useQuery(GET_ALL_MESSAGES);

  if (error) return <StatusPage state={error && 'error'} />;
  if (loading) return <StatusPage state={loading && 'loading'} />;

  return (
    <MessagesGrid>
      {isFormOpen ? <MessageForm /> : null}
      {data.messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </MessagesGrid>
  );
};

export default Messages;
