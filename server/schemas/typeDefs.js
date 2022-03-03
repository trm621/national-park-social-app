const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    donation: Boolean
    friendCount: Int
    posts: [Post]
    friends: [User]

  }
  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    photo: String
    commentCount: Int
    comments: [Comment]
  }
  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addComment(commentId: ID!, commentBody: String!): Post
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;