import gql from 'graphql-tag';

export const GET_SINGLE_MESSAGE = gql`
  query GET_SINGLE_MESSAGE($id: ID!) {
    message(id: $id) {
      title
      message
      author
      dislikes
      date
    }
  }
`;

export const DISLIKE_MESSAGE = gql`
  mutation DISLIKE_MESSAGE($id: ID!) {
    dislikeMessage(id: $id) {
      id
      dislikes
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation ADD_MESSAGE($title: String!, $message: String!, $author: String!) {
    addMessage(title: $title, message: $message, author: $author) {
      id
    }
  }
`;

export const GET_ALL_MESSAGES = gql`
  query GET_ALL_MESSAGES {
    messages {
      id
      title
      message
      author
      dislikes
      date
    }
  }
`;
