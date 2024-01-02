import SingInForm from "./SingInForm";
import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import useSingIn from "../../hooks/useSingIn";
import { useNavigate } from "react-router-native";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must have at least 3 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password has to contain at least 5 characters")
    .required("Password is required"),
});

export const SingInContainer = ({ onSubmit }) => {
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

const SingIn = () => {
  const [singIn] = useSingIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await singIn({ username, password });
      console.log(data);
      navigate("/");
    } catch (e) {
      console.log(`Ongelmia sisäänkirjautumisessa: ${e}`);
    }
  };

  return <SingInContainer onSubmit={onSubmit} />;
};

export default SingIn;
