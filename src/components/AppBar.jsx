import Constants from "expo-constants";
import { StyleSheet, Text, View, Pressable } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 64 + Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: "row",
    alignItems: "center",
  },
  tab: {
    paddingHorizontal: 16,
    // marginRight: 16,
    // paddingVertical: 12,
  },
  text: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeights.medium,
  },
});

const AppBarTab = ({ title }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.tab, { opacity: pressed ? 0.7 : 1 }]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab title="Repositories" />
    </View>
  );
};

export default AppBar;
