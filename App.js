import { StatusBar, StyleSheet } from "react-native";
import Main from "./src/main";
import theme from "./src/theme";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import { PaperProvider } from "react-native-paper";
import { Surface } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme,
  },
});

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  return (
    <PaperProvider>
      <Surface style={styles.container}>
        <NativeRouter
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <ApolloProvider client={apolloClient}>
            <AuthStorageContext.Provider value={authStorage}>
              <Main />
            </AuthStorageContext.Provider>
          </ApolloProvider>
        </NativeRouter>
        <StatusBar
          backgroundColor={theme.colors.secondary}
          barStyle="light-content"
        />
      </Surface>
    </PaperProvider>
  );
}
