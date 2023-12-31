import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { Pressable, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "column",
  },
  loginButton: {
    flexGrow: 1,
    justifyContent: "center",
    margin: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 4,
    minHeight: 42,
  },
});

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" multiline={true} />
      <Pressable style={styles.loginButton} onPress={onSubmit}>
        <Text color="white" fontSize="heading" textAlign="center">
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export default CreateReviewForm;
