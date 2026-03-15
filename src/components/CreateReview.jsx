import { View } from "react-native";
import TextInput from "./ui/TextInput";
import { useFormik } from "formik";
import Button from "./ui/Button";
import * as yup from "yup";
import useCreateReview from "../hooks/useCreateReview";
import { useState } from "react";
import TextInputErrorMessage from "./ui/TextInputErrorMessage";
import theme from "../theme";

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .min(0, "Rating is a required number between 0 and 100")
    .max(100, "Rating is a required number between 0 and 100")
    .required("Rating is required"),
  text: yup.string(),
});

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const [error, setError] = useState();
  const formik = useFormik({
    initialValues: {
      ownerName: "",
      repositoryName: "",
      rating: "",
      text: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { ownerName, repositoryName, rating, text } = values;
        const { data } = await createReview({
          ownerName,
          repositoryName,
          rating: Number(rating),
          text,
        });
        console.log(data);
      } catch (e) {
        setError(e.message);
        console.log(e);
      }
    },
  });

  return (
    <View style={theme.formContainer}>
      <TextInput
        formik={formik}
        field="ownerName"
        placeholder="Repository owner name"
      />
      <TextInput
        formik={formik}
        field="repositoryName"
        placeholder="Repository name"
      />
      <TextInput
        formik={formik}
        field="rating"
        placeholder="Rating between 0 and 100"
      />
      <TextInput formik={formik} field="text" placeholder="Review" multiline />
      {error ? <TextInputErrorMessage formik={formik} error={error} /> : null}
      <Button onPress={formik.handleSubmit}>Create a review</Button>
    </View>
  );
};

export default CreateReview;
