import React from 'react';
import styled from '@emotion/styled';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { FiUmbrella } from 'react-icons/fi';

const DISLIKE_MESSAGE = gql`
  mutation DISLIKE_MESSAGE($id: ID!) {
    dislikeMessage(id: $id) {
      id
    }
  }
`;

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 0.5rem;
  background: ${({ theme }) => theme.lightGrey};

  > * {
    font-size: 0.75rem;
  }
`;

const DislikeContainer = styled.label`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  line-height: 12px;
  cursor: pointer;
`;

const DislikeButton = styled.input`
  display: none;
`;

const Dislikees = styled.span`
  margin-right: 3px;
`;

const Dislike = ({ id, dislikes }) => {
  return (
    <Mutation
      mutation={DISLIKE_MESSAGE}
      variables={{ id }}
      refetchQueries={[
        {
          query: gql`
            query($id: ID!) {
              message(id: $id) {
                id
                title
                message
                author
                dislikes
                date
              }
            }
          `,
          variables: {
            id
          }
        }
      ]}
    >
      {(dislikeMessage, { data, error, loading }) => {
        return (
          <DislikeContainer
            htmlFor={`dislike-${id}`}
            onChange={() => dislikeMessage()}
          >
            <DislikeButton type="checkbox" id={`dislike-${id}`} />
            <Dislikees>{dislikes}</Dislikees>
            <FiUmbrella />
          </DislikeContainer>
        );
      }}
    </Mutation>
  );
};

const Footer = ({ id, dislikes }) => {
  return (
    <Container>
      <Dislike id={id} dislikes={dislikes} />
    </Container>
  );
};

export default Footer;
