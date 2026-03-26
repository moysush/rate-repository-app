import { Alert, StyleSheet, View } from "react-native";
import Button from "../ui/Button";
import useDeleteReview from "../../hooks/useDeleteReview";
import { useNavigate } from "react-router-native";
import { useTheme } from "react-native-paper";

const DeleteReview = ({ data, refetch }) => {
  const paperTheme = useTheme();
  const [deleteReview] = useDeleteReview();
  const navigate = useNavigate();
  const styles = StyleSheet.create({
    buttonsContainer: {
      flexDirection: "row",
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
            style={{ flex: 1, backgroundColor: paperTheme.colors.error }}
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
