import { gql } from "@apollo/client";

export const REPOSITORY_FRAGMENT = gql`
  fragment RepositoryDetails on Repository {
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
`;

export const REVIEW_BASIC_FRAGMENT = gql`
  fragment ReviewDetails on Review {
    createdAt
    id
    text
    rating
  }
`;
