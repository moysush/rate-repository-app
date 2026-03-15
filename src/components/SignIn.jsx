import { useFormik } from "formik";
import { View } from "react-native";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import Button from "./ui/Button";
import TextInputErrorMessage from "./ui/TextInputErrorMessage";
import { useState } from "react";
import TextInput from "./ui/TextInput";
import theme from "../theme";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInContainer = ({ onSubmit, error }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <View style={theme.formContainer}>
      <TextInput formik={formik} field="username" placeholder="Username" />
      <TextInput
        formik={formik}
        field="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      {/* only for the data error */}
      {error ? <TextInputErrorMessage formik={formik} error={error} /> : null}
      <Button onPress={formik.handleSubmit}>Sign in</Button>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} error={error} />;
};

export default SignIn;
