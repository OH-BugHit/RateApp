import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import useSingIn from "../hooks/useSingIn";
import { useNavigate } from "react-router-native";
import useSingUp from "../hooks/useSingUp";
import SingUpForm from "./SingUpForm";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must have at least 5 characters")
    .max(30, "Username must have length between 5 and 30")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password has to contain at least 5 characters")
    .max(30, "Password must have length between 5 and 30")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), "Incorrect confirmation"])
    .required("Password confirmation is required"),
});

export const SingUpContainer = ({ onSubmit }) => {
  const initialValues = {
    username: undefined,
    password: undefined,
    passwordConfirmation: undefined,
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SingUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const SingUp = () => {
  const [singUp] = useSingUp();
  const [singIn] = useSingIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await singUp({ username, password });
      const { data } = await singIn({ username, password });
      console.log(data);
      navigate("/");
    } catch (e) {
      console.log(`Ongelmia sisäänkirjautumisessa: ${e}`);
    }
  };

  return <SingUpContainer onSubmit={onSubmit} />;
};

export default SingUp;
