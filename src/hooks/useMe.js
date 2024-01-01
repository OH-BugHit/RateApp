import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useMe = (includeReviews) => {
  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: {
      includeReviews: includeReviews,
    },
  });
  return {
    me: data ? data.me : null,
    loading,
    error,
  };
};

export default useMe;
