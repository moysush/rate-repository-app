import {
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import Main from "./src/main";
import theme from "./src/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surfaceVariant,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.appBarBackground} barStyle="light-content" />
      <Main />
    </View>
  );
}

