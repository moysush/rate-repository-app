import { format } from "date-fns";
import { StyleSheet, View } from "react-native";
import Text from "../ui/Text";
import DeleteReview from "./DeleteReview";
import { Card, useTheme } from "react-native-paper";

const ReviewItem = ({ data, refetch }) => {
  const date = format(new Date(data.createdAt), "MMM dd, y");
  const paperTheme = useTheme();
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      marginVertical: 4,
    },
    reviewContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 16,
    },
    ratingContainer: {
      justifyContent: "center",
      alignItems: "center",
      width: 56,
      height: 56,
      borderWidth: 4,
      borderRadius: 28,
      borderColor: paperTheme.colors.primary,
    },
    detailsContainer: {
      gap: 2,
      flex: 1,
    },
  });

  return (
    <Card mode="contained" style={styles.container}>
      <View style={styles.reviewContainer}>
        <View style={styles.ratingContainer}>
          <Text
            variant="titleMedium"
            style={{ color: paperTheme.colors.primary, fontWeight: "bold" }}
          >
            {data.rating}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text variant="titleMedium">
            {/* if repo name exists then it shows it instead of username in the my reviews component */}
            {data.repository?.fullName
              ? data.repository.fullName
              : data.user.username}
          </Text>
          <Text variant="labelMedium" style={{ marginBottom: 4 }}>
            {date}
          </Text>
          <Text>{data.text}</Text>
        </View>
      </View>
      <DeleteReview data={data} refetch={refetch} />
    </Card>
  );
};

export default ReviewItem;
