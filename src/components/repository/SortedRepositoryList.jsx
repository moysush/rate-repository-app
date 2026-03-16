import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import Text from "../ui/Text";
import theme from "../../theme";

const SortedRepositoryList = ({ refetch, selectedSort, setSelectedSort }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    chip: {
      backgroundColor: theme.colors.surfaceContainer,
      //   borderWidth: 1,
      //   borderColor: theme.colors.onSurfaceVariant,
      paddingVertical: 4,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginRight: 4,
      marginBottom: 8,
    },
    chipSelected: {
      backgroundColor: theme.colors.primaryContainer,
      //   borderWidth: 1,
      //   borderColor: theme.colors.onPrimaryContainer,
    },
    chipText: {
      color: theme.colors.onPrimaryContainer,
    },
  });

  const handleSorting = async (orderBy, orderDirection, sortKey) => {
    setSelectedSort(sortKey);
    await refetch({ orderBy, orderDirection });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable
          style={[
            styles.chip,
            selectedSort === "latest" && styles.chipSelected,
          ]}
          onPress={() => {
            handleSorting("CREATED_AT", "DESC", "latest");
          }}
        >
          <Text style={styles.chipText}>Latest repositories</Text>
        </Pressable>
        <Pressable
          style={[
            styles.chip,
            selectedSort === "highest" && styles.chipSelected,
          ]}
          onPress={() => {
            handleSorting("RATING_AVERAGE", "DESC", "highest");
          }}
        >
          <Text style={styles.chipText}>Highest rated repositories</Text>
        </Pressable>
        <Pressable
          style={[
            styles.chip,
            selectedSort === "lowest" && styles.chipSelected,
          ]}
          onPress={() => {
            handleSorting("RATING_AVERAGE", "ASC", "lowest");
          }}
        >
          <Text style={styles.chipText}>Lowest rated repositories</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default SortedRepositoryList;
