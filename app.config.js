import "dotenv/config";

export default {
  name: "rate-repository-app",
  slug: "rate-repository-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.sushmoy.raterepositoryapp",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    env: process.env.ENV,
    apolloUri: process.env.APOLLO_URI,
    eas: {
      projectId: "cb722687-d98a-4a34-b12c-02b31d7ed7e9",
    },
  },
};
