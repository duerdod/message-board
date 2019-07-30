import React from 'react';
import styled from '@emotion/styled';
import { Mutation } from 'react-apollo';
import { FiBell } from 'react-icons/fi';
import {
  DISLIKE_MESSAGE,
  GET_ALL_MESSAGES,
  GET_SINGLE_MESSAGE
} from '../../gql/gql';

const DislikeContainer = styled.label`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  line-height: 12px;
  cursor: pointer;
  > svg {
    color: ${({ theme }) => theme.yellow};
    /* fill: ${({ theme }) => theme.yellow}; */
  }
`;

const DislikeButton = styled.input`
  display: none;
`;

const Dislikees = styled.span`
  margin-right: 3px;
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
            <Dislikees>{dislikes}</Dislikees>
            <span
              role="img"
              aria-label="report message"
              style={{ fontSize: '1rem' }}
            >
              🔔
            </span>
          </DislikeContainer>
        );
      }}
    </Mutation>
  );
};

export default Dislike;
