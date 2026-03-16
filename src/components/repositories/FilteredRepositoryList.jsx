import { View, TextInput, StyleSheet } from "react-native";
import theme from "../../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDebounce } from "use-debounce";
import { useEffect } from "react";

const FilteredRepositoryList = ({ refetch, filterText, setFilterText }) => {
  const [debouncedText] = useDebounce(filterText, 500);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surfaceContainer,
      borderRadius: 100,
      height: 56,
      paddingHorizontal: 16,
      marginBottom: 8,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    search: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      flex: 1,
    },
  });

  useEffect(() => {
    refetch({ searchKeyword: debouncedText });
  }, [debouncedText]);

  const handleFilter = async (value) => {
    setFilterText(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <MaterialCommunityIcons name="magnify" size={18} />
        <TextInput
          style={{ flex: 1 }}
          value={filterText}
          onChangeText={(value) => handleFilter(value)}
          placeholder="Search repository"
        />
      </View>
      <MaterialCommunityIcons
        name="close"
        size={18}
        onPress={() => handleFilter("")}
      />
    </View>
  );
};

export default FilteredRepositoryList;
