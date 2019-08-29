import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from '@emotion/styled';
import { GET_ALL_MESSAGES, GET_MESSAGE_BY_TAG } from '../../gql/gql';
import MessagesGrid from '../ui/MessagesGrid';
import Message from './Message';
import StatusPage from '../StatusPage';
import MessageForm from '../Forms/MessageForm';
import { MessageFormContext } from '../../context/message-context';

import Button from '../ui/Button';
// import config from '../../config';

const Page = styled.main`
  button {
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
`;

// TODO: Rewrite to use tag as variable on GET_ALL_MESSAGES instead.
// TODO: How to know when there is no more fetchMore without using cursors? ...
const Messages = ({ tag }) => {
  const { isFormOpen } = useContext(MessageFormContext);

  // Tag = is on page /messages/:tag
  const { error, data, loading, fetchMore } = useQuery(
    tag ? GET_MESSAGE_BY_TAG : GET_ALL_MESSAGES,
    {
      variables: {
        tag: `#${tag}`,
        first: 150,
        skip: 0
      }
    }
  );

  if (error) return <StatusPage state={error && 'error'} />;
  if (loading) return <StatusPage state={loading && 'loading'} />;
  const { messages } = tag ? data.tag : data;

  // eslint-disable-next-line
  const fetchMessages = () => {
    fetchMore({
      variables: {
        first: 150,
        skip: data.messages.length
      },
      updateQuery: (lastResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return lastResult;
        }
        const { messages } = fetchMoreResult;
        return {
          messages: [...lastResult.messages, ...messages]
        };
      }
    });
  };

  return (
    <Page>
      <MessagesGrid>
        {isFormOpen ? <MessageForm /> : null}
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </MessagesGrid>
      <Button
        color="secondary"
        size="lagom"
        onClick={() => {
          console.log('not yet..');
        }}
      >
        Is there more messages?
      </Button>
    </Page>
  );
};

export default Messages;

// TODO: Come up with some UI for this... I works like a chaarm.
//

/* <ThemeButton
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
      </ThemeButton> */
