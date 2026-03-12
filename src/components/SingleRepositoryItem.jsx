import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import { ActivityIndicator, View } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";
import Text from "./Text";
import * as Linking from "expo-linking";
import Button from "./Button";

const SingleRepositoryItem = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  if (loading) {
    return (
      <View
        style={{
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Loading repositories...</Text>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ padding: 16 }}>
        <Text color="error">Failed to load repository.</Text>
        <Text>{error.message}</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 8 }}>
      <RepositoryItem data={data.repository}>
        <Button
          onPress={() => Linking.openURL(data.repository.url)}
          style={{ marginTop: 16 }}
        >
          Open in GitHub
        </Button>
      </RepositoryItem>
    </View>
  );
};

export default SingleRepositoryItem;
