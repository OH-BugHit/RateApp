import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          language
          description
          ownerAvatarUrl
          ratingAverage
          reviewCount
          forksCount
          stargazersCount
        }
      }
    }
  }
`;
