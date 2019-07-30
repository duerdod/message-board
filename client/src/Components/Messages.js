import React from 'react';
import { Query } from 'react-apollo';
import styled from '@emotion/styled';
import { useTrail, animated } from 'react-spring';
import { GET_ALL_MESSAGES } from '../gql/gql';
import Message from './Message/Message';
import config from '../config';
import Loading from './Loading';

const MessagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  .expanded {
    grid-row: span 2;
  }
  .message {
    margin: 0 0.5rem 0.5rem 0.5rem;
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
          className={`message ${messages[i].message.length >
            config.messageTruncateLength && 'expanded'}`}
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
