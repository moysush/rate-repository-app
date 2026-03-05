import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.onSurface,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorOnSurfaceVariant: {
    color: theme.colors.onSurfaceVariant,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSurface: {
    color: theme.colors.surface,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subHeading,
  },
  fontSizeTitle: {
    fontSize: theme.fontSizes.title,
  },
  fontWeightMedium: {
    fontWeight: theme.fontWeights.medium,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === "onSurfaceVariant" && styles.colorOnSurfaceVariant,
    color === "primary" && styles.colorPrimary,
    color === "surface" && styles.colorSurface,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "title" && styles.fontSizeTitle,
    fontWeight === "medium" && styles.fontWeightMedium,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];
  return <NativeText style={textStyle} {...props} />;
};

export default Text;
