import { useApolloClient, useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

export const useSignOut = () => {
  const { data } = useQuery(GET_CURRENT_USER);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return { user: data?.me, signOut };
};
