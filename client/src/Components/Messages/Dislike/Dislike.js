import React from 'react';
import styled from '@emotion/styled';
import { useMutation } from '@apollo/react-hooks';
import { ReactComponent as Bell } from '../../../svg/Bell.svg';
import { DISLIKE_MESSAGE, GET_ALL_MESSAGES } from '../../../gql/gql';
import BellAnimation from '../../ui/BellAnimation';

const DislikeContainer = styled.label`
  transition: all 0.4s ease;
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: center;
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
  margin-left: 4px;
`;

export const StyledBell = styled(Bell)`
  color: ${({ theme }) => theme.color.yellow.hex};
  fill: ${({ theme }) => theme.color.yellow.hex};
  width: 1.3rem;
  stroke: none;
  ${BellAnimation};
  &.pressed {
    animation-name: dangle;
    animation-duration: 4s;
  }
`;

const Dislike = ({ id, dislikes }) => {
  const [dislikeMessage, { loading }] = useMutation(DISLIKE_MESSAGE, {
    variables: {
      id
    },
    update(cache, payload) {
      if (dislikes < 5) return;
      // Read cache
      const data = cache.readQuery({ query: GET_ALL_MESSAGES });

      // Remove message from cache
      data.messages = data.messages.filter(
        message => message.id !== payload.data.dislikeMessage.id
      );

      // Put back into Apollo cache
      cache.writeQuery({ query: GET_ALL_MESSAGES, data });
    }
  });

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
};

export default Dislike;
