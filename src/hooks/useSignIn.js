import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const res = await mutate({ variables: { username, password } });    
    await authStorage.setAccessToken(res?.data?.authenticate?.accessToken);
    await apolloClient.resetStore();
    return res;
  };

  return [signIn, result];
};

export default useSignIn;
