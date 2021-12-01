import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BLOG = gql`
  mutation addBlog($userId: ID!, $blog: String!) {
    addBlog(userId: $userId, blog: $blog) {
      _id
      username
      blogs
    }
  }
`;

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

export const REMOVE_BLOG = gql`
  mutation removeBlog($blog: String!) {
    removeSkill(blog: $blog) {
      _id
      username
      blogs
    }
  }
`;
