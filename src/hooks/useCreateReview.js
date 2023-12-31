import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

// hookki uudelle reviewille
const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    console.log(
      `creating review with following data ${ownerName}/ ${repositoryName}/ ${rating}/ ${text}`
    );
    return await mutate({
      variables: {
        review: {
          ownerName: ownerName,
          rating: Number(rating),
          repositoryName: repositoryName,
          text: text ? text : "",
        },
      },
    });
  };
  return [createReview, result];
};

export default useCreateReview;
