import React from 'react';
import { Query } from 'react-apollo';
import { useTransition, animated } from 'react-spring';
import { GET_ALL_MESSAGES } from '../gql/gql';
import Message from './Message/Message';
import config from '../config';
import Status from './StatusPage';

const Messages = () => {
  return (
    <Query query={GET_ALL_MESSAGES}>
      {({ error, loading, data }) => {
        if (error) return <Status state={error && 'error'} />;
        if (loading) return <Status state={loading && 'loading'} />;
        return <MessagesGrid messages={data.messages} />;
      }}
    </Query>
  );
};

const anmationConfig = { duration: 250 };

const MessagesGrid = ({ messages }) => {
  // Animations.
  const trailedMessages = useTransition(
    messages ? messages : [],
    message => message.id,
    {
      config: anmationConfig,
      trail: 400 / messages.length,
      from: { opacity: 0, transform: 'scale(0)' },
      enter: { opacity: 1, transform: 'scale(1)' },
      leave: { opacity: 0, transform: 'scale(0)' }
    }
  );
  return trailedMessages.map((props, i) => (
    <animated.div
      className={`${messages[i].message.length > config.messageTruncateLength &&
        'expanded'} message`}
      style={props.props}
      key={messages[i].id}
    >
      <Message message={messages[i]} />
    </animated.div>
  ));
};

// Dummy message. Should this be used?
// {Object.keys(values).length >= 1 ? (
//   <DummyMessage dummy={values} />
// ) : null}

export default Messages;
