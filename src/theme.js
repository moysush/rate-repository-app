import { Platform } from "react-native";

const theme = {
  colors: {
    // Brand Colors
    primary: "#65558F",
    onPrimary: "#FFFFFF",
    primaryContainer: "#EADDFF",
    onPrimaryContainer: "#21005D",

    // secondary
    secondary: "#625B71",
    onSecondary: "#FFFFFF",

    // tertiary
    tertiary: "#7D5260",
    onTertiary: "#FFFFFF",

    // outline
    outline: "#79747E",
    error: "#B3261E",

    // Neutral Colors (Surfaces)

    surface: "#FEF7FF",
    surfaceContainer: "#F7F2FA",
    onSurface: "#1D1B20",
    onSurfaceVariant: "#49454F",
    surfaceDim: "#DED8E1",

    // Top App Bar Specific
    // appBarBackground: "#F3EDF7",
    // appBarText: "#1D1B20",
  },
  fontSizes: {
    body: 14,
    subHeading: 16,
    title: 22,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    medium: "500",
    bold: "700",
  },
  formContainer: {
    padding: 16,
    gap: 10,
  },
};

export default theme;
