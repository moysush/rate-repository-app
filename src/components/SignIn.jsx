import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import Button from "./ui/Button";
import TextInputErrorMessage from "./ui/TextInputErrorMessage";
import { useState } from "react";
import TextInput from "./ui/TextInput";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required!"),
  password: yup.string().required("Password is required!"),
});

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 10,
  },
});

export const SignInContainer = ({ onSubmit, invalidData }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput formik={formik} field="username" placeholder="Username" />
      <TextInput
        formik={formik}
        field="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      {/* only for the data error */}
      <TextInputErrorMessage formik={formik} invalidData={invalidData} />
      <Button onPress={formik.handleSubmit}>Sign in</Button>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const [invalidData, setInvalidData] = useState(null);

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      navigate("/");
    } catch (e) {
      setInvalidData(e.message);
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} invalidData={invalidData} />;
};

export default SignIn;
