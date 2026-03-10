import { useApolloClient, useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

export const useSignOut = () => {
  const { data } = useQuery(ME);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return { user: data?.me, signOut };
};
