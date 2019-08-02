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
    item => item.id,
    {
      config: anmationConfig,
      unique: true,
      trail: 400 / messages.length,
      from: { opacity: 0, transform: 'translate3d(0px, -20px, 0px) scale(0)' },
      enter: { opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale(1)' },
      leave: { opacity: 0, transform: 'translate3d(0px, 0px, 0px) scale(0)' }
    }
  );
  console.log(trailedMessages);
  return trailedMessages.map(({ item, props, key }) => {
    return (
      <animated.div
        className={`${item.message.length > config.messageTruncateLength &&
          'expanded'} message`}
        style={props}
        key={key}
      >
        <Message message={item} />
      </animated.div>
    );
  });
};

// Dummy message. Should this be used?
// {Object.keys(values).length >= 1 ? (
//   <DummyMessage dummy={values} />
// ) : null}

export default Messages;
