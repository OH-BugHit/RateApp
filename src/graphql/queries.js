import { gql } from "@apollo/client";
import { REPOSITORY_FRAGMENT } from "./fragment";

export const GET_REPOSITORIES = gql`
  query repositories(
    $orderBy: AllRepositoriesOrderBy!
    $orderDirection: OrderDirection!
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;

export const GET_SINGLE_REPOSITORY = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      url
      ...RepositoryDetails
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;

export const ME = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            createdAt
            id
            text
            rating
            repository {
              fullName
            }
          }
        }
      }
    }
  }
`;
