import { gql } from '@apollo/client';

export const QUERY_POST = gql`
    query posts($id: ID!) {
        posts(_id: $id) {
            _id
            postText
            createdAt
            username
            commentCount
            comments {
                createdAt
                username
                commentBody
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            comments {
                _id
                postText
                createdAt
                commentCount
            }
        }
    }
`

export const QUERY_ME = gql`
{
    me {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
        commentCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
{
    me {
      _id
      username
      email
    }
  }
`