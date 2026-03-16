import theme from "../../theme";
import { format } from "date-fns";
import { StyleSheet, View } from "react-native";
import Text from "../ui/Text";

const ReviewItem = ({ data }) => {
  const date = format(new Date(data.createdAt), "MMM dd, y");
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      borderRadius: 16,
      backgroundColor: theme.colors.onPrimary,
      marginBottom: 8,
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
      gap: 2,
      flex: 1,
    },
  });

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.reviewContainer}>
          <Text fontSize="subheading" style={styles.ratingContainer}>
            {data.rating}
          </Text>
          <View style={styles.detailsContainer}>
            <Text fontSize="subheading" fontWeight="bold">
              {/* if repo name exists then it shows it instead of username in the my reviews component */}
              {data.repository?.fullName
                ? data.repository.fullName
                : data.user.username}
            </Text>
            <Text color="onSurfaceVariant" style={{ marginBottom: 4 }}>
              {date}
            </Text>
            <Text>{data.text}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
