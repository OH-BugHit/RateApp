import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (listing, bounce) => {
  let direction;
  switch (listing) {
    case "CREATED_AT": {
      listing = "CREATED_AT";
      direction = "DESC";
      break;
    }
    case "lowrate": {
      listing = "RATING_AVERAGE";
      direction = "ASC";
      break;
    }
    case "highrate": {
      listing = "RATING_AVERAGE";
      direction = "DESC";
      break;
    }
  }
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy: listing,
      orderDirection: direction,
      searchKeyword: bounce,
    },
  });
  return {
    repositories: data ? data.repositories : null,
    loading,
    error,
  };
};

export default useRepositories;
