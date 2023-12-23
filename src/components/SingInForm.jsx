import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { Pressable, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginButton: {
    flexGrow: 1,
    margin: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 4,
    minHeight: 42,
  },
});

const SingInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable style={styles.loginButton} onPress={onSubmit}>
        <Text color="white" fontSize="heading" textAlign="center">
          Log in
        </Text>
      </Pressable>
    </View>
  );
};

export default SingInForm;
