import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import CreateReviewForm from "./CreateReviewForm";
import useCreateReview from "../../hooks/useCreateReview";

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .max(39, "Maximum number of characters in GitHub username is 39")
    .required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository Name is required"),
  rating: yup.number().min(0).max(100).required("Rating is required"),
});

export const CreateReviewContainer = ({ onSubmit }) => {
  const initialValues = {
    ownerName: undefined,
    repositoryName: undefined,
    rating: undefined,
    text: undefined,
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    try {
      const { data } = await createReview({
        ownerName,
        repositoryName,
        rating,
        text,
      });

      console.log(data);

      console.log(data.createReview.repositoryId);
      navigate(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(`Ongelmia uuden luomisessa: ${e}`); // virheenkäsittely tänne...
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
