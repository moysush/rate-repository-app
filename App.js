import { StatusBar, StyleSheet, View } from "react-native";
import Main from "./src/main";
import theme from "./src/theme";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {

  return (
    <View style={styles.container}>
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
        backgroundColor={theme.colors.appBarBackground}
        barStyle="light-content"
      />
    </View>
  );
}
