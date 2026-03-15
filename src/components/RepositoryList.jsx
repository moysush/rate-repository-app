import { FlatList, View, ActivityIndicator } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import Text from "./ui/Text";

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({ item }) => <RepositoryItem data={item} />}
      keyExtractor={(item) => item.id}
      style={{ padding: 8 }}
    />
  );
};

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();

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

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
