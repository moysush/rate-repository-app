import theme from "../../theme";
import { format } from "date-fns";
import { Alert, StyleSheet, View } from "react-native";
import Text from "../ui/Text";
import Button from "../ui/Button";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../../hooks/useDeleteReview";

const ReviewItem = ({ data, refetch }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();
  const date = format(new Date(data.createdAt), "MMM dd, y");
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      borderRadius: 16,
      backgroundColor: theme.colors.surface,
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
    buttonsContainer: {
      flexDirection: "row",
      marginTop: 12,
      //   flex: 1,
      gap: 16,
    },
  });

  const handleDelete = async (id) => {
    await deleteReview(id);
    await refetch();
  };

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
        {data.repositoryId ? (
          <View style={styles.buttonsContainer}>
            <Button
              style={{ flex: 1 }}
              onPress={() => navigate(`/repositories/${data.repositoryId}`)}
            >
              View repository
            </Button>
            <Button
              style={{ flex: 1, backgroundColor: theme.colors.error }}
              onPress={() =>
                Alert.alert(
                  "Delete",
                  "Are you sure you want to delete this review?",
                  [
                    { text: "Cancel" },
                    { text: "Confirm", onPress: () => handleDelete(data.id) },
                  ],
                  { cancelable: true },
                )
              }
            >
              Delete review
            </Button>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default ReviewItem;
