import { StyleSheet, View } from "react-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  text: {
    color: theme.colors.onSurface,
    fontSize: 20,
    fontWeight: "700",
  },
  flex: {
    flexDirection: "row",
  },
});

const Main = () => {
  return (
    <View style={[styles.text]}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
