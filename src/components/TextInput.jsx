import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    margin: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    textAlign: "center",
  },
  errorBorder: {
    borderColor: "red", // Change to your desired error color
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, style, error && styles.errorBorder];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
