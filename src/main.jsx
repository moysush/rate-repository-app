import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import RepositoryList from "./components/RepositoryList";
import Text from "./components/Text";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
  text: {
    color: "purple",
    fontSize: 24,
    fontWeight: "700",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text color="textSecondary" fontSize="subheading">
        Rate Repository App
      </Text>
      <RepositoryList />
    </View>
  );
};

export default Main;
