import { gql } from "@apollo/client";
import { REPOSITORY_FRAGMENT, REVIEW_BASIC_FRAGMENT } from "./fragment";

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
  query repository($id: ID!, $first: Int!, $after: String) {
    repository(id: $id) {
      url
      ...RepositoryDetails
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewDetails
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
  ${REVIEW_BASIC_FRAGMENT}
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
            ...ReviewDetails
            repository {
              fullName
            }
            repositoryId
          }
        }
      }
    }
  }
  ${REVIEW_BASIC_FRAGMENT}
`;
