import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutate] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    const res = await mutate({ variables: { id: id } });
    return res;
  };

  return [deleteReview];
};

export default useDeleteReview;
