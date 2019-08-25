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
  query GET_ALL_MESSAGES($first: Int, $skip: Int) {
    messages(first: $first, skip: $skip) {
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

export const COMMENT_MESSAGE = gql`
  mutation COMMENT_MESSAGE($id: ID!, $comment: String!, $author: String!) {
    commentMessage(id: $id, author: $author, comment: $comment) {
      id
      comment
      author
      __typename
    }
  }
`;

export const SIGN_UP = gql`
  mutation SIGN_UP(
    $firstname: String
    $lastname: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstname: $firstname
      lastname: $lastname
      username: $username
      email: $email
      password: $password
    ) {
      id
      username
      email
      __typename
    }
  }
`;

export const SIGN_IN = gql`
  mutation SIGN_IN($username: String!, $password: String!) {
    signin(username: $username, password: $password) {
      id
      username
      __typename
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query GET_CURRENT_USER {
    currentUser {
      id
      username
      __typename
    }
  }
`;

export const GET_USER = gql`
  query GET_USER($username: String) {
    user(username: $username) {
      id
      firstname
      lastname
      username
      email
      messages {
        id
        title
        message
        dislikes
        __typename
      }
      __typename
    }
  }
`;

// NOT DETAILS. MESSAGES AND SUCH. ACTIONS? HISTORY?
export const GET_CURRENT_USER_DETAILS = gql`
  query GET_CURRENT_USER_DETAILS {
    currentUser {
      id
      firstname
      lastname
      username
      email
      messages {
        id
        title
        message
        dislikes
        __typename
      }
      __typename
    }
  }
`;

export const SIGN_OUT = gql`
  mutation SIGN_OUT {
    signout {
      success
      __typename
    }
  }
`;

export const DELETE_USER = gql`
  mutation DELETE_USER($username: String!, $password: String!) {
    removeUser(username: $username, password: $password) {
      id
      __typename
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UPDATE_USER(
    $firstname: String
    $lastname: String
    $email: String
    $password: String!
    $newPassword: String
  ) {
    updateUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      newPassword: $newPassword
    ) {
      id
      firstname
      lastname
      email
    }
  }
`;
