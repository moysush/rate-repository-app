import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../../theme";

const Button = ({ children, onPress, style }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 100,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: theme.colors.onPrimary,
      fontWeight: "bold",
    },
    pressed: {
      opacity: 0.8,
    },
  });

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default Button;
