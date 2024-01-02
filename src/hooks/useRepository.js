import { useQuery } from "@apollo/client";
import { GET_SINGLE_REPOSITORY } from "../graphql/queries";

const useRepository = ({ id, first }) => {
  const { data, error, loading, fetchMore, ...result } = useQuery(
    GET_SINGLE_REPOSITORY,
    {
      fetchPolicy: "cache-and-network",
      variables: { id: id, first },
    }
  );

  // Tänne vois tehdä sit jos ei nextpage nii palautuksen et ei animoida latausta
  // Tässäkään versiossa ei animoida semmoista, mut jos teet joskus
  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;
    console.log("haetaan lisää");
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        id: id,
        first,
      },
    });
  };

  return {
    repository: data ? data.repository : null,
    fetchMore: handleFetchMore,
    loading,
    error,
    ...result,
  };
};

export default useRepository;
