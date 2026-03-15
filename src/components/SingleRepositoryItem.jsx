import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY, GET_REVIEWS } from "../graphql/queries";
import Text from "./ui/Text";
import * as Linking from "expo-linking";
import Button from "./ui/Button";
import theme from "../theme";
import { format } from "date-fns";

const RepositoryInfo = ({ data }) => {
  return (
    <View style={{ padding: 8 }}>
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

const ReviewItem = ({ data }) => {
  const date = format(new Date(data.createdAt), "MMM dd, y");
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: theme.colors.onPrimary,
      borderRadius: 16,
      // borderColor: theme.colors.surfaceVariant,
    },
    reviewContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 16,
    },
    ratingContainer: {
      // justifyContent: "space-evenly",
      width: 56,
      height: 56,
      alignSelf: "flex-start",
      borderWidth: 4,
      borderRadius: 28,
      textAlign: "center",
      textAlignVertical: "center",
      borderColor: theme.colors.primary,
      fontWeight: "bold",
      color: theme.colors.primary,
    },
    detailsContainer: {
      gap: 4,
      flex: 1,
    },
  });

  return (
    <View style={{ paddingHorizontal: 8, paddingVertical: 4 }}>
      <View style={styles.container}>
        <View style={styles.reviewContainer}>
          <Text fontSize="subheading" style={styles.ratingContainer}>
            {data.rating}
          </Text>
          <View style={styles.detailsContainer}>
            <Text fontSize="subheading" fontWeight="bold">
              {data.user.username}
            </Text>
            <Text color="onSurfaceVariant">{date}</Text>
            <Text>{data.text}</Text>
          </View>
        </View>
      </View>
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
  });
  const { data: reviewData } = useQuery(GET_REVIEWS, {
    variables: { id },
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
    />
  );
};

export default SingleRepositoryItem;
