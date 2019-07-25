import React from 'react';
// import gql from 'graphql-tag';
// import { Query } from 'react-apollo';
import styled from '@emotion/styled';
import { useTrail, animated } from 'react-spring';
import Message from './Message';
import mockedMessages from '../../data';
import config from '../../config';

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
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 0.8rem;
  margin: 0 auto;
  .expanded {
    grid-row-end: span 2;
  }
  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr;
  }
`;

const animationConfig = { duration: 250 };

const Messages = ({ values }) => {
  // Animations.
  const trailedMessages = useTrail(mockedMessages.length, {
    config: animationConfig,
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' }
  });

  return (
    <MessagesContainer>
      {trailedMessages.map((props, i) => (
        <animated.div
          className={
            mockedMessages[i].message.length > config.messageTruncateLength
              ? 'expanded'
              : null
          }
          style={props}
          key={mockedMessages[i].id}
        >
          <Message message={mockedMessages[i]} />
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
