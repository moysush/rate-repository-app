import { ApolloClient, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";

// console.log(Constants.expoConfig);
// console.log("DEBUG: All Constants:", JSON.stringify(Constants, null, 2));

const createApolloClient = () => {
  return new ApolloClient({
    uri: Constants.expoConfig.extra.apolloUri,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
