import SingInForm from "./SingInForm";
import { View } from "react-native";
import { Formik } from "formik";

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
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SingInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SingIn;
