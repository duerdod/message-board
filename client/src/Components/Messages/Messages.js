import React from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_MESSAGES } from '../../gql/gql';
// import CardAnimation from '../ui/CardAnimation';
import Message from './Message';
import Status from '../StatusPage';
// import { useTransition, animated } from 'react-spring';

// const useCardAnimation = props => {
//   // Animations.
//   const trailedMessages = useTransition(props ? props : [], item => item.id, {
//     config: { duration: 250 },
//     unique: true,
//     trail: 300 / props.length,
//     from: { opacity: 0, transform: 'translate3d(0px, -10px, 0px)' },
//     enter: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }
//   });
//   return trailedMessages;
// };

const Messages = () => {
  return (
    <Query query={GET_ALL_MESSAGES}>
      {({ error, loading, data }) => {
        if (error) return <Status state={error && 'error'} />;
        if (loading) return <Status state={loading && 'loading'} />;
        const { messages } = data;
        return messages.map(message => (
          <Message key={message.id} message={message} />
        ));
      }}
    </Query>
  );
};

export default Messages;
