import { StyleSheet, View } from "react-native";
import Button from "./ui/Button";
import { useFormik } from "formik";
import TextInput from "./ui/TextInput";
import * as yup from "yup";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
// import TextInputErrorMessage from "./TextInputErrorMessage";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username must be at least 5 characters long")
    .max(50, "Username must be at most 30 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .max(50, "Password must be at most 50 characters long")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Password Confirmation is required"),
});

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const styles = StyleSheet.create({
    container: {
      padding: 16,
      gap: 10,
    },
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { username, password } = values;
        const { data } = await signUp({ username, password });
        console.log(data);
        await signIn({ username, password });
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    },
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
      <TextInput
        formik={formik}
        field="passwordConfirmation"
        placeholder="Password Confirmation"
        secureTextEntry={true}
      />
      <Button onPress={formik.handleSubmit}>Sign up</Button>
    </View>
  );
};

export default SignUp;
