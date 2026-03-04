import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Main from "./src/main";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, React-Native!!</Text>
      <Main />
      {/* <Text>
        {Platform.OS === "android" ? "A real Android device" : " The Web"}
      </Text>
      <Pressable onPress={() => Alert.alert("You pressed the Text!")}>
        <Text>You can press me</Text>
      </Pressable>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
