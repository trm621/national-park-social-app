import { gql } from '@apollo/client';
// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// ADD_USER will execute the addUser mutation.
// only askign for bio upon first signup- may want to offer to change that later
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $bio:bio) {
    addUser(username: $username, email: $email, password: $password, bio: $bio) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $thoughtId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`

export const ADD_POST = gql`
mutation addPost($postText: String!) {
  addPost(postText: $postText) {
    _id
    postText
    createdAt
    username
    commentCount
    comments {
      _id
    }
  }
}
`;