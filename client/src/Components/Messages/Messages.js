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
  .fetch-more {
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
        first: 20,
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
        className="fetch-more"
        color="secondary"
        size="lagom"
        onClick={fetchMessages}
      >
        Is there more messages?
      </Button>
    </Page>
  );
};

export default Messages;
