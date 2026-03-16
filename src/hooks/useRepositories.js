import { GET_REPOSITORIES } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useRepositories = (
  orderBy = "CREATED_AT",
  orderDirection = "DESC",
  searchKeyword,
) => {
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy: orderBy,
      orderDirection: orderDirection,
      searchKeyword: searchKeyword,
    },
    fetchPolicy: "cache-and-network",
  });

  return { repositories: data?.repositories, loading, error, refetch };
};

export default useRepositories;
