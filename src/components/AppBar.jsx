import Constants from "expo-constants";
import { StyleSheet, View, Pressable, ScrollView } from "react-native";
import Text from "./ui/Text";
import theme from "../theme";
import { useNavigate } from "react-router-native";
import { useSignOut } from "../hooks/useSignOut";

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

const AppBarTab = ({ label, path, customFeature }) => {
  const navigate = useNavigate();
  return (
    <Pressable
      onPress={async () => {
        // console.log("pressed", path);
        customFeature ? await customFeature() : null;
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
  const { user, signOut } = useSignOut();
  // console.log(user);
  // console.log(user?.username);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {/* tabs */}
        <AppBarTab label="Repositories" path="/" />
        {!user && <AppBarTab label="Sign in" path="/signin" />}
        {!user && <AppBarTab label="Sign up" path="/signup" />}
        {user && (
          <AppBarTab label="Sign out" path="/signin" customFeature={signOut} />
        )}
      </ScrollView>
      {/* profile name */}
      {user && <AppBarTab label={user?.username} />}
    </View>
  );
};

export default AppBar;
