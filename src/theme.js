import { Platform } from "react-native";

const theme = {
  colors: {
    // Brand Colors
    primary: "#6750A4",
    onPrimary: "#FFFFFF",
    primaryContainer: "#EADDFF",
    onPrimaryContainer: "#21005D",

    // outline
    outline: "#79747E",
    error: "#B3261E",

    // Neutral Colors (Surfaces)
    mainbBackground: "#E7E0EC", // Base background for the whole app
    surface: "#FEF7FF",
    // surfaceContainerLow: "#F7F2FA", // Slightly darker for a subtle list background
    // surfaceVariant: "#E7E0EC", // Darker neutral for high contrast
    onSurface: "#1D1B20", // Main text color
    onSurfaceVariant: "#49454F", // Secondary/hint text

    // Top App Bar Specific
    appBarBackground: "#211F26",
    appBarText: "#E6E1E5",
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
