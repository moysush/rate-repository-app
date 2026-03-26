import { StyleSheet, View, ScrollView, Platform } from "react-native";
import Text from "../ui/Text";
import { Chip } from "react-native-paper";

const SortedRepositoryList = ({ refetch, selectedSort, setSelectedSort }) => {
  const styles = StyleSheet.create({
    container: {
      // flexDirection: "row",
      // alignItems: "center",
      // gap: 16,
      marginBottom: 8,
    },
  });

  const handleSorting = async (orderBy, orderDirection, sortKey) => {
    setSelectedSort(sortKey);
    await refetch({ orderBy, orderDirection });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Chip
          selected={Platform.OS === "android" && selectedSort === "latest"}
          showSelectedOverlay
          style={{ marginRight: 4 }}
          onPress={() => {
            handleSorting("CREATED_AT", "DESC", "latest");
          }}
        >
          <Text style={styles.chipText}>Latest repositories</Text>
        </Chip>
        <Chip
          selected={Platform.OS === "android" && selectedSort === "highest"}
          showSelectedOverlay
          style={{ marginRight: 4 }}
          onPress={() => {
            handleSorting("RATING_AVERAGE", "DESC", "highest");
          }}
        >
          <Text style={styles.chipText}>Highest rated repositories</Text>
        </Chip>
        <Chip
          selected={Platform.OS === "android" && selectedSort === "lowest"}
          showSelectedOverlay
          style={{ marginRight: 4 }}
          onPress={() => {
            handleSorting("RATING_AVERAGE", "ASC", "lowest");
          }}
        >
          <Text style={styles.chipText}>Lowest rated repositories</Text>
        </Chip>
      </ScrollView>
    </View>
  );
};

export default SortedRepositoryList;
