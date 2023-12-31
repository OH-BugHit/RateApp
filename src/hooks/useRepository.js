import { useQuery } from "@apollo/client";
import { GET_SINGLE_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, error, loading } = useQuery(GET_SINGLE_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id: id },
  });
  return {
    repository: data ? data.repository : null,
    loading,
    error,
  };
};

export default useRepository;
