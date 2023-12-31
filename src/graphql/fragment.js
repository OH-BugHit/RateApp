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
