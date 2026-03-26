import { View, StyleSheet } from "react-native";
import { useDebounce } from "use-debounce";
import { useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FilteredRepositoryList = ({ refetch, filterText, setFilterText }) => {
  const [debouncedText] = useDebounce(filterText, 500);
  const styles = StyleSheet.create({
    container: {
      marginVertical: 8,
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
      <Searchbar
        style={{ flex: 1 }}
        placeholder="Search repository..."
        value={filterText}
        onChangeText={(value) => handleFilter(value)}
        // icon="magnify"
        icon={(props) => <MaterialCommunityIcons name="magnify" {...props} />}
        clearIcon={(props) => (
          <MaterialCommunityIcons name="close" {...props} />
        )}
      />
    </View>
  );
};

export default FilteredRepositoryList;
