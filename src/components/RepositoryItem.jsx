import { Image, StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

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
    flex: 1,
  },
  detailsContainer: {
    flex: 1, // This forces this specific container to stay within the row's bounds
    gap: 8,
  },
  statsContainer: {
    justifyContent: "space-evenly",
    marginTop: 16,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.surface,
    alignSelf: "flex-start",
    padding: 6,
    borderRadius: 4,
  },
});

const formatThousands = (value) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value;
};

const RepositoryItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <View>
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
      </View>
    </View>
  );
};

export default RepositoryItem;
