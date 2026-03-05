import { StyleSheet, Text, View } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  fullName: {
    color: theme.colors.onSurface,
    fontSize: theme.fontSizes.subHeading,
    fontWeight: theme.fontWeights.medium,
  },
  description: {
    color: theme.colors.onSurfaceVariant,
  },
});

const RepositoryItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fullName}>Full Name: {data.fullName}</Text>
      <Text style={styles.description}>Description: {data.description}</Text>
      <Text>Language: {data.language}</Text>
      <Text>Stars: {data.stargazersCount}</Text>
      <Text>Forks: {data.forksCount}</Text>
      <Text>Reviews: {data.reviewCount}</Text>
      <Text>Rating: {data.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
