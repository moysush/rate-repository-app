import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, rating, repositoryName, text }) => {
    const res = await mutate({
      variables: {
        ownerName,
        rating,
        repositoryName,
        text,
      },
    });
    return res;
  };

  return [createReview, result];
};

export default useCreateReview;
