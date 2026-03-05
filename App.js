import {
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import Main from "./src/main";
import theme from "./src/theme";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.appBarBackground} barStyle="light-content" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
});
