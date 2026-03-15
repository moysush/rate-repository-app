import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP);

  const signUp = async ({ username, password }) => {
    const res = await mutate({ variables: { username, password } });
    console.log(res);
    return res;
  };

  return [signUp, result];
};

export default useSignUp;
