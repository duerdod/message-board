import React, { useState, useEffect, useRef } from 'react';
// import gql from 'graphql-tag';
// import { Query } from 'react-apollo';
import styled from '@emotion/styled';
import { Trail } from 'react-spring/renderprops';
// import Message, { DummyMessage } from './Message';
import Message, { TestMessage } from './Message';
import messages from '../../data';

// const GET_ALL_MESSAGES = gql`
//   query GET_ALL_MESSAGES {
//     messages {
//       id
//       title
//       message
//       author
//       date
//     }
//   }
// `;

const MessagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  /* grid-auto-flow: dense; */
  grid-gap: 0.5rem;
  transition: all 0.2s ease;
`;

const Messages = ({ values }) => {
  const [isMounted, setMountedState] = useState(false);
  useEffect(() => setMountedState(true), []);

  return (
    <MessagesContainer>
      {messages.map(message => (
        <Message message={message} key={message.id} />
      ))}
    </MessagesContainer>
  );
};

// {Object.keys(values).length >= 1 ? (
//   <DummyMessage dummy={values} />
// ) : null}

export default Messages;
