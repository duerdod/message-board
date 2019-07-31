import React from 'react';
import styled from '@emotion/styled';
import { Mutation } from 'react-apollo';
import { FaBell } from 'react-icons/fa';
import {
  DISLIKE_MESSAGE,
  GET_ALL_MESSAGES,
  GET_SINGLE_MESSAGE
} from '../../gql/gql';
import BellAnimation from '../ui/BellAnimation';

const DislikeContainer = styled.label`
  width: 100%;
  text-align: center;
  transition: all 0.4s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const DislikeButton = styled.input`
  display: none;
`;

const Dislikees = styled.span`
  font-size: 0.65rem;
  display: block;
  opacity: 0.7;
`;

const StyledBell = styled(FaBell)`
  color: ${({ theme }) => theme.yellow};
  fill: ${({ theme }) => theme.yellow};
  font-size: 1.5rem;
  ${BellAnimation};
  &.pressed {
    animation-name: dangle;
    animation-duration: 4s;
  }
`;

const refetchMessage = dislikes =>
  dislikes < 5 ? GET_SINGLE_MESSAGE : GET_ALL_MESSAGES;

const Dislike = ({ id, dislikes }) => {
  return (
    <Mutation
      mutation={DISLIKE_MESSAGE}
      variables={{ id }}
      refetchQueries={[
        {
          query: refetchMessage(dislikes),
          variables: { id }
        }
      ]}
    >
      {(dislikeMessage, { data, error, loading }) => {
        return (
          <DislikeContainer
            htmlFor={`dislike-${id}`}
            onChange={dislikeMessage}
            disabled={loading}
          >
            <DislikeButton type="checkbox" id={`dislike-${id}`} />
            <StyledBell className={loading && 'pressed'} />
            <Dislikees>{dislikes}</Dislikees>
          </DislikeContainer>
        );
      }}
    </Mutation>
  );
};

export default Dislike;
