import Constants from "expo-constants";
import { StyleSheet, View, Pressable, ScrollView } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useNavigate } from "react-router-native";

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
});

const AppBarTab = ({ label, path }) => {
  const navigate = useNavigate();
  return (
    <Pressable
      onPress={() => {
        console.log("pressed", path);
        navigate(path);
      }}
      style={styles.tab}
    >
      <Text color="surface" fontWeight="bold" fontSize="subheading">
        {label}
      </Text>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab label="Repositories" path="/" />
        <AppBarTab label="Sign in" path="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
