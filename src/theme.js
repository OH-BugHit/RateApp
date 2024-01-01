import { StyleSheet } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292E",
    textSecondary: "#586069",
    primary: "#0366D6",
    white: "#FFFFFF",
    gray: "gray",
    blue: "blue",
    black: "black",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 24,
  },
  fonts: {
    main: "System",
    android: "Roboto",
    ios: "Arial",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  textAling: {
    center: "center",
  },
  backgroundColor: {
    primary: "#F6F6F6",
    secondary: "red",
    itemBackground: "white",
  },
};

export const themeStyles = StyleSheet.create({
  separator: {
    height: 10,
  },
  flexContainer: {
    backgroundColor: theme.backgroundColor.itemBackground,
    padding: 10,
  },
  flexRow: {
    flexDirection: "row",
    margin: 2,
  },
  flexColumn: {
    marginLeft: 6,
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: "column",
  },
  openButton: {
    justifyContent: "center",
    margin: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 10,
    flexGrow: 1,
  },
  deleteButton: {
    justifyContent: "center",
    margin: 10,
    backgroundColor: theme.backgroundColor.secondary,
    borderRadius: 4,
    padding: 10,
    flexGrow: 1,
  },
});

export default theme;
