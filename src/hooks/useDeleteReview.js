import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

// hookki kirjautumiselle
const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async ({ item }) => {
    console.log(`delete review ${item}`);
    const result = await mutate({
      variables: { deleteReviewId: item },
    });
    return result;
  };
  return [deleteReview, result];
};

export default useDeleteReview;
