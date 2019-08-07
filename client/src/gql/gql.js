import gql from 'graphql-tag';

export const GET_SINGLE_MESSAGE = gql`
  query GET_SINGLE_MESSAGE($id: ID!) {
    message(id: $id) {
      id
      title
      message
      author
      dislikes
      comments {
        id
        comment
        author
        date
      }
      date
      __typename
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
      comments {
        id
      }
      date
      __typename
    }
  }
`;

export const DISLIKE_MESSAGE = gql`
  mutation DISLIKE_MESSAGE($id: ID!) {
    dislikeMessage(id: $id) {
      id
      dislikes
      __typename
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation ADD_MESSAGE($title: String!, $message: String!, $author: String!) {
    addMessage(title: $title, message: $message, author: $author) {
      id
      __typename
    }
  }
`;

export const DELETE_MESSAGE = gql`
  mutation DELETE_MESSAGE($id: ID!) {
    deleteMessage(id: $id) {
      id
      __typename
    }
  }
`;
