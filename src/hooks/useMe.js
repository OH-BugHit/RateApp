import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useMe = (includeReviews) => {
  const { data, error, loading, refetch } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: {
      includeReviews: includeReviews,
    },
  });
  return {
    me: data ? data.me : null,
    loading,
    error,
    refetch,
  };
};

export default useMe;
