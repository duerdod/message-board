import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_MESSAGES } from '../../gql/gql';
import MessagesGrid from '../ui/MessagesGrid';
import Message from './Message';
import StatusPage from '../StatusPage';
import MessageForm from '../Forms/MessageForm';
import { MessageFormContext } from '../../context/message-context';
// import config from '../../config';
// import Button from '../ui/Button';

const Messages = props => {
  const { isFormOpen } = useContext(MessageFormContext);
  const { error, data, loading } = useQuery(GET_ALL_MESSAGES);

  // const fetchMessages = () => {
  //   fetchMore({
  //     variables: {
  //       first: config.messageBatchCount,
  //       skip: data.messages.length
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult) return prev;
  //       const { messages } = fetchMoreResult;
  //       return {
  //         messages: [...prev.messages, ...messages]
  //       };
  //     }
  //   });
  // };

  if (error) return <StatusPage state={error && 'error'} />;
  if (loading) return <StatusPage state={loading && 'loading'} />;

  return (
    <MessagesGrid>
      {isFormOpen ? <MessageForm /> : null}
      {data.messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
      {/* <ThemeButton
        style={{
          width: '60px',
          margin: '2rem auto',
          justifyContent: 'center'
        }}
        onClick={fetchMessages}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fcfafa"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </ThemeButton> */}
    </MessagesGrid>
  );
};

export default Messages;
