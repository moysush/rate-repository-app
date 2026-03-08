// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  // const response = await fetch("http://192.168.1.29:5000/api/repositories");
  // const json = await response.json();

  // console.log(JSON.stringify(data, null, 2));

  useEffect(() => {
    if (data?.repositories) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return { repositories, loading, error, refetch };
};

export default useRepositories;
