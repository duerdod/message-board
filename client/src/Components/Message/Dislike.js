import React from 'react';
import styled from '@emotion/styled';
import { Mutation } from 'react-apollo';
import { FaBell } from 'react-icons/fa';
import {
  DISLIKE_MESSAGE,
  GET_ALL_MESSAGES,
  GET_SINGLE_MESSAGE
} from '../../gql/gql';

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
  @keyframes dangle {
    0% {
      transform: rotate(0);
    }
    1% {
      transform: rotate(30deg);
    }
    3% {
      transform: rotate(-28deg);
    }
    5% {
      transform: rotate(34deg);
    }
    7% {
      transform: rotate(-32deg);
    }
    9% {
      transform: rotate(30deg);
    }
    11% {
      transform: rotate(-28deg);
    }
    13% {
      transform: rotate(26deg);
    }
    15% {
      transform: rotate(-24deg);
    }
    17% {
      transform: rotate(22deg);
    }
    19% {
      transform: rotate(-20deg);
    }
    21% {
      transform: rotate(18deg);
    }
    23% {
      transform: rotate(-16deg);
    }
    25% {
      transform: rotate(14deg);
    }
    27% {
      transform: rotate(-12deg);
    }
    29% {
      transform: rotate(10deg);
    }
    31% {
      transform: rotate(-8deg);
    }
    33% {
      transform: rotate(6deg);
    }
    35% {
      transform: rotate(-4deg);
    }
    37% {
      transform: rotate(2deg);
    }
    39% {
      transform: rotate(1deg);
    }
    41% {
      transform: rotate(1deg);
    }

    43% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(0);
    }
  }
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
