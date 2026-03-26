import { StyleSheet, View, Pressable } from "react-native";
import Text from "../ui/Text";
import { useNavigate } from "react-router-native";
import { Avatar, Card, Chip, useTheme } from "react-native-paper";

const formatThousands = (value) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value;
};

const RepositoryItem = ({ data, children }) => {
  const navigate = useNavigate();
  const paperTheme = useTheme();
  const styles = StyleSheet.create({
    surface: {
      padding: 16,
      borderRadius: 16,
      marginBottom: 8,
    },
    pressContent: {
      flex: 1,
    },
    repoContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 16,
    },
    detailsContainer: {
      gap: 4,
      flex: 1,
    },
    statsContainer: {
      justifyContent: "space-evenly",
      marginTop: 16,
    },
    language: {
      backgroundColor: paperTheme.colors.primary,
      alignSelf: "flex-start",
    },
    pressed: {
      opacity: 0.9,
    },
  });

  return (
    <Card style={styles.surface} mode="contained">
      <Pressable
        onPress={() => navigate(`/repositories/${data.id}`)}
        style={({ pressed }) => [styles.container, pressed && styles.pressed]}
        testID="repositoryItem"
      >
        <View style={styles.repoContainer}>
          <Avatar.Image
            style={{ backgroundColor: "transparent" }}
            size={56}
            source={{ uri: data.ownerAvatarUrl }}
          />
          <View style={styles.detailsContainer}>
            <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
              {data.fullName}
            </Text>
            <Text variant="labelLarge">{data.description}</Text>
            <Chip style={[styles.language, { marginTop: 8 }]}>
              <Text style={{ color: paperTheme.colors.onPrimary }}>
                {data.language}
              </Text>
            </Chip>
          </View>
        </View>
        <View style={[styles.repoContainer, styles.statsContainer]}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
              {formatThousands(data.stargazersCount)}
            </Text>
            <Text variant="labelLarge">Stars</Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
              {formatThousands(data.forksCount)}
            </Text>
            <Text variant="labelLarge">Forks</Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
              {formatThousands(data.reviewCount)}
            </Text>
            <Text variant="labelLarge">Reviews</Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
              {formatThousands(data.ratingAverage)}
            </Text>
            <Text variant="labelLarge">Rating</Text>
          </View>
        </View>
        <View>{children}</View>
      </Pressable>
    </Card>
  );
};

export default RepositoryItem;
