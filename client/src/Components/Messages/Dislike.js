import React from 'react';
import styled from '@emotion/styled';
import { Mutation } from 'react-apollo';
import { ReactComponent as Bell } from '../../svg/Bell.svg';
import { DISLIKE_MESSAGE, GET_ALL_MESSAGES } from '../../gql/gql';
import BellAnimation from '../ui/BellAnimation';

const DislikeContainer = styled.label`
  width: 100%;
  transition: all 0.4s ease;
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const DislikeButton = styled.input`
  display: none;
`;

const Dislikees = styled.span`
  font-size: 0.65rem;
  opacity: 0.7;
`;

const StyledBell = styled(Bell)`
  color: ${({ theme }) => theme.yellow};
  fill: ${({ theme }) => theme.yellow};
  width: 1.3rem;
  stroke: none;
  ${BellAnimation};
  &.pressed {
    animation-name: dangle;
    animation-duration: 4s;
  }
`;

// const refetchMessage = dislikes =>
//   dislikes < 5 ? GET_SINGLE_MESSAGE : GET_ALL_MESSAGES;

const Dislike = ({ id, dislikes }) => {
  const updateCache = (cache, payload) => {
    // Read cache
    const data = cache.readQuery({ query: GET_ALL_MESSAGES });

    // Remove message from cache
    data.messages = data.messages.filter(
      message => message.id !== payload.data.dislikeMessage.id
    );

    // Put back into Apollo cache
    cache.writeQuery({ query: GET_ALL_MESSAGES, data });
  };

  return (
    <Mutation
      mutation={DISLIKE_MESSAGE}
      variables={{ id }}
      update={dislikes >= 5 ? updateCache : null}
    >
      {(dislikeMessage, { loading }) => {
        return (
          <DislikeContainer
            htmlFor={`dislike-${id}`}
            onChange={dislikeMessage}
            disabled={loading}
          >
            <DislikeButton type="radio" id={`dislike-${id}`} />
            <StyledBell className={loading && 'pressed'} />
            <Dislikees>{dislikes}</Dislikees>
          </DislikeContainer>
        );
      }}
    </Mutation>
  );
};

export default Dislike;
