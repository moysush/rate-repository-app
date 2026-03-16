import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY, GET_REVIEWS } from "../../graphql/queries";
import Text from "../ui/Text";
import * as Linking from "expo-linking";
import Button from "../ui/Button";
import ReviewItem from "./ReviewItem";

const RepositoryInfo = ({ data }) => {
  return (
    <View style={{ marginBottom: 8 }}>
      <RepositoryItem data={data}>
        <Button
          onPress={() => Linking.openURL(data.url)}
          style={{ marginTop: 16 }}
        >
          Open in GitHub
        </Button>
      </RepositoryItem>
    </View>
  );
};

const SingleRepositoryItem = () => {
  const { id } = useParams();
  const {
    data: repositoryData,
    loading,
    error,
  } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });
  const { data: reviewData } = useQuery(GET_REVIEWS, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });
  const repository = repositoryData?.repository ?? {};
  const reviewNodes =
    reviewData?.repository?.reviews?.edges?.map((e) => e.node) ?? [];

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
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem data={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <RepositoryInfo data={repository} />}
      style={{ padding: 8, marginBottom: 8 }}
    />
  );
};

export default SingleRepositoryItem;
