import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorWhite: {
    color: theme.colors.white,
  },
  colorGray: {
    color: theme.colors.gray,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  textAlingCenter: {
    textAlign: theme.textAling.center,
  },
  textBackgroundSecondary: {
    backgroundColor: theme.backgroundColor.secondary,
  },
  textBackgroundPrimary: {
    backgroundColor: theme.colors.textPrimary,
  },
});

const Text = ({
  color,
  fontSize,
  fontWeight,
  style,
  textAlign,
  textBackground,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "white" && styles.colorWhite,
    color === "gray" && styles.colorGray,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "heading" && styles.fontSizeHeading,
    fontWeight === "bold" && styles.fontWeightBold,
    textAlign === "center" && styles.textAlingCenter,
    textBackground === "secondary" && styles.textBackgroundSecondary,
    textBackground === "primary" && styles.textBackgroundPrimary,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
