import {
  FlatList,
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import Text from "./ui/Text";
import theme from "../theme";

const SortedRepositoryList = ({ refetch }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    sorting: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 4,
      paddingHorizontal: 12,
      borderRadius: 6,
      marginRight: 4,
      marginBottom: 8,
    },
    sortingText: {
      color: theme.colors.surface,
    },
  });
  const handleSorting = async (orderBy, orderDirection) => {
    await refetch({ orderBy, orderDirection });
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable
          style={styles.sorting}
          onPress={() => handleSorting("CREATED_AT", "DESC")}
        >
          <Text style={styles.sortingText}>Latest repositories</Text>
        </Pressable>
        <Pressable
          style={styles.sorting}
          onPress={() => handleSorting("RATING_AVERAGE", "DESC")}
        >
          <Text style={styles.sortingText}>Highest rated repositories</Text>
        </Pressable>
        <Pressable
          style={styles.sorting}
          onPress={() => handleSorting("RATING_AVERAGE", "ASC")}
        >
          <Text style={styles.sortingText}>Lowest rated repositories</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export const RepositoryListContainer = ({ repositories, refetch }) => {
  const repositoryNodes = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({ item }) => <RepositoryItem data={item} />}
      keyExtractor={(item) => item.id}
      style={{ padding: 8, marginBottom: 8 }}
      ListHeaderComponent={() => <SortedRepositoryList refetch={refetch} />}
    />
  );
};

const RepositoryList = () => {
  const { repositories, loading, error, refetch } = useRepositories();

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
    <RepositoryListContainer repositories={repositories} refetch={refetch} />
  );
};

export default RepositoryList;
