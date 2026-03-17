import { FlatList, View, ActivityIndicator } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import Text from "../ui/Text";
import { useState } from "react";
import SortedRepositoryList from "./SortedRepositoryList";
import FilteredRepositoryList from "./FilteredRepositoryList";

export const RepositoryListContainer = ({
  repositories,
  refetch,
  onEndReach,
}) => {
  const [filterText, setFilterText] = useState("");
  const [selectedSort, setSelectedSort] = useState("latest");
  const repositoryNodes = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({ item }) => <RepositoryItem data={item} />}
      keyExtractor={(item) => item.id}
      style={{ padding: 8, marginBottom: 8 }}
      ListHeaderComponent={
        <View>
          <FilteredRepositoryList
            refetch={refetch}
            filterText={filterText}
            setFilterText={setFilterText}
          />
          <SortedRepositoryList
            refetch={refetch}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
          />
        </View>
      }
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const { repositories, fetchMore, loading, error, refetch } = useRepositories({
    first: 8,
  });

  const onEndReach = () => {
    fetchMore();
    // console.log("You have reached the end of the list");
  };

  if (loading) {
    return (
      <View
        style={{
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Loading repositories...</Text>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ padding: 16 }}>
        <Text color="error">Failed to load repositories.</Text>
        <Text>{error.message}</Text>
      </View>
    );
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      refetch={refetch}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
