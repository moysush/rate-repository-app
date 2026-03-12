import { StyleSheet, View } from "react-native";
import { Route, Routes } from "react-router-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";
import theme from "./theme";
import SignIn from "./components/SignIn";
import SingleRepositoryItem from "./components/SingleRepositoryItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.mainbBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repositories/:id" element={<SingleRepositoryItem />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </View>
  );
};

export default Main;
