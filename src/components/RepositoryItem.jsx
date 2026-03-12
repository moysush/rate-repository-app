import { Image, StyleSheet, View, Pressable } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: theme.colors.onPrimary,
    borderRadius: 16,
    marginBottom: 8,
    // borderColor: theme.colors.surfaceVariant,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  repoContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  detailsContainer: {
    gap: 8,
    flex: 1,
  },
  statsContainer: {
    justifyContent: "space-evenly",
    marginTop: 16,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.surface,
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
});

const formatThousands = (value) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value;
};

const RepositoryItem = ({ data, children }) => {
  const navigate = useNavigate();

  return (
    <View>
      <Pressable
        onPress={() => navigate(`/repositories/${data.id}`)}
        style={styles.container}
        testID="repositoryItem"
      >
        <View style={styles.repoContainer}>
          <Image style={styles.image} source={{ uri: data.ownerAvatarUrl }} />
          <View style={styles.detailsContainer}>
            <Text fontWeight="bold" fontSize="subheading">
              {data.fullName}
            </Text>
            <Text color="onSurfaceVariant">{data.description}</Text>
            <Text style={styles.language}>{data.language}</Text>
          </View>
        </View>
        <View style={[styles.repoContainer, styles.statsContainer]}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text fontWeight="bold" fontSize="subheading">
              {formatThousands(data.stargazersCount)}
            </Text>
            <Text fontSize="subheading" color="onSurfaceVariant">
              Stars
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text fontWeight="bold" fontSize="subheading">
              {formatThousands(data.forksCount)}
            </Text>
            <Text fontSize="subheading" color="onSurfaceVariant">
              Forks
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text fontWeight="bold" fontSize="subheading">
              {formatThousands(data.reviewCount)}
            </Text>
            <Text fontSize="subheading" color="onSurfaceVariant">
              Reviews
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text fontWeight="bold" fontSize="subheading">
              {formatThousands(data.ratingAverage)}
            </Text>
            <Text fontSize="subheading" color="onSurfaceVariant">
              Rating
            </Text>
          </View>
        </View>
        <View>{children}</View>
      </Pressable>
    </View>
  );
};

export default RepositoryItem;
