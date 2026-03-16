import theme from "../../theme";
import { Alert, StyleSheet, View } from "react-native";
import Button from "../ui/Button";
import useDeleteReview from "../../hooks/useDeleteReview";
import { useNavigate } from "react-router-native";

const DeleteReview = ({ data, refetch }) => {
  const [deleteReview] = useDeleteReview();
  const navigate = useNavigate();
  const styles = StyleSheet.create({
    buttonsContainer: {
      flexDirection: "row",
      marginTop: 12,
      gap: 16,
    },
  });

  const handleDelete = async (id) => {
    await deleteReview(id);
    await refetch();
  };

  return (
    <View>
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
                  { text: "Cancel", style: "cancel" },
                  {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => handleDelete(data.id),
                  },
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
  );
};

export default DeleteReview;
