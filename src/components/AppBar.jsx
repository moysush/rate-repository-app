import Constants from "expo-constants";
import { StyleSheet, Pressable, ScrollView } from "react-native";
import Text from "./ui/Text";
import theme from "../theme";
import { useLocation, useNavigate } from "react-router-native";
import { useSignOut } from "../hooks/useSignOut";
import { Appbar } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 64 + Constants.statusBarHeight,
    backgroundColor: theme.colors.secondary,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },
  tab: {
    marginHorizontal: 8,
    // paddingHorizontal: 12,
    // paddingHorizontal: 8,
    // marginRight: 16,
    paddingVertical: 4,
  },
  pressed: {
    opacity: 0.8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: theme.colors.onSecondary,
    // paddingBottom: 2,
    // border,
  },
});

const AppBarTab = ({ label, path, customFeature, user }) => {
  const navigate = useNavigate();
  const currentPath = useLocation();

  return (
    <Pressable
      onPress={async () => {
        // console.log("pressed", path);
        customFeature ? await customFeature() : null;
        path ? navigate(path) : null;
      }}
      style={({ pressed }) => [
        styles.tab,
        pressed && styles.pressed,
        path === currentPath.pathname && styles.activeTab,
      ]}
    >
      <Text
        style={{
          color: user
            ? theme.colors.primaryContainer
            : theme.colors.onSecondary,
        }}
        variant="titleMedium"
      >
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
    <Appbar.Header style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* tabs */}
        <AppBarTab label="Repositories" path="/" />
        {!user && <AppBarTab label="Sign in" path="/signin" />}
        {!user && <AppBarTab label="Sign up" path="/signup" />}
        {user && <AppBarTab label="Create a review" path="/create-review" />}
        {user && <AppBarTab label="My reviews" path="/reviews" />}
        {user && (
          <AppBarTab label="Sign out" path="/signin" customFeature={signOut} />
        )}
      </ScrollView>
      {/* profile name */}
      {user && <AppBarTab label={user?.username} user={user} />}
    </Appbar.Header>
  );
};

export default AppBar;
