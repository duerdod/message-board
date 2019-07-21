import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from '@emotion/styled';
import Message, { DummyMessage } from './Message';
import message from '../../data';

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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: minmax(160px, auto);
  grid-auto-flow: dense;
  grid-gap: 0.5rem;
  transition: all 0.2s ease;
`;

const dummy = {
  id: 1,
  title: 'd',
  message: '',
  author: 'erik bajs',
  date: Date.now()
};

const Messages = ({ values }) => {
  return (
    <MessagesContainer>
      {Object.keys(values).length >= 1 ? <DummyMessage dummy={values} /> : null}
      {message.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </MessagesContainer>
  );
};

export default Messages;
