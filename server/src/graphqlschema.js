const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Success {
    success: String!
  }

  type Comment {
    id: ID!
    comment: String!
    author: String!
    dislikes: Int!
    message: Message
    user: User
    date: String!
  }

  type Message {
    id: ID!
    title: String!
    message: String!
    author: String!
    dislikes: Int!
    comments: [Comment]
    user: User
    date: String
  }

  type User {
    id: ID!
    email: String!
    username: String!
    firstname: String
    lastname: String
    password: String!
    messages: [Message]
    comments: [Comment]
  }

  type Query {
    messages(first: Int, skip: Int): [Message]
    message(id: ID!): Message
    currentUser: User
  }

  type Mutation {
    addMessage(
      title: String!
      message: String!
      author: String!
      date: String
    ): Message
    dislikeMessage(id: ID!): Message
    deleteMessage(id: ID!): Message
    commentMessage(id: ID!, author: String!, comment: String!): Comment
    signup(
      email: String!
      password: String!
      username: String!
      firstname: String
      lastname: String
    ): User!
    signin(username: String!, password: String!): User!
    signout: Success!
  }
`;

module.exports = typeDefs;