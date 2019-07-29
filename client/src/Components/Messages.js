import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from '@emotion/styled';
import { useTrail, animated } from 'react-spring';
import Message from './Messages/Message';
import config from '../config';
import Loading from './Loading';

export const GET_ALL_MESSAGES = gql`
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
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 0.8rem;
  .expanded {
    grid-row-end: span 2;
  }
  .message {
    /* padding: 1rem; */
  }
  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr;
  }
`;

const animationConfig = { duration: 250 };

const Messages = props => {
  return (
    <Query query={GET_ALL_MESSAGES}>
      {({ error, loading, data }) => {
        if (error) return <p>Error..</p>;
        if (loading) return <Loading />;
        return <MessagesGrid messages={data.messages} />;
      }}
    </Query>
  );
};

const MessagesGrid = ({ messages }) => {
  // Animations.
  const trailedMessages = useTrail(messages.length, {
    config: animationConfig,
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' }
  });

  return (
    <MessagesContainer>
      {trailedMessages.map((props, i) => (
        <animated.div
          className={`message ${
            messages[i].message.length > config.messageTruncateLength
              ? 'expanded'
              : null
          }`}
          style={props}
          key={messages[i].id}
        >
          <Message message={messages[i]} />
        </animated.div>
      ))}
    </MessagesContainer>
  );
};

// The dummy message. Should this be used?
// {Object.keys(values).length >= 1 ? (
//   <DummyMessage dummy={values} />
// ) : null}

export default Messages;
