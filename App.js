import { StatusBar, StyleSheet, View } from "react-native";
import Main from "./src/main";
import theme from "./src/theme";
import { NativeRouter } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Main />
      </NativeRouter>
      <StatusBar
        backgroundColor={theme.colors.appBarBackground}
        barStyle="light-content"
      />
    </View>
  );
}
