import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      createdAt
      id
      reviewCount
      reviews {
        edges {
          cursor
        }
      }
      username
    }
  }
`;
