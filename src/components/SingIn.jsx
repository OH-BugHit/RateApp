import SingInForm from "./SingInForm";
import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must have at least 3 letters")
    .required("Username is required"),
  password: yup
    .string()
    .min(3, "Password has to contain at least 3 letters")
    .required("Password is required"),
});

const SingIn = () => {
  const onSubmit = (values) => {
    console.log(`submit ${values}`);
  };

  const initialValues = {
    username: undefined,
    password: undefined,
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SingInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SingIn;
