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

export const CREATE_REVIEW = gql`
  mutation CreateReview(
    $ownerName: String!
    $rating: Int!
    $repositoryName: String!
    $text: String
  ) {
    createReview(
      review: {
        ownerName: $ownerName
        rating: $rating
        repositoryName: $repositoryName
        text: $text
      }
    ) {
      id
      userId
      repositoryId
      rating
      createdAt
      text
    }
  }
`;
