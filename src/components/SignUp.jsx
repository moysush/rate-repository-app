import { StyleSheet, View } from "react-native";
import Button from "./ui/Button";
import { useFormik } from "formik";
import theme from "../theme";
import TextInput from "./ui/TextInput";
// import TextInputErrorMessage from "./TextInputErrorMessage";

const SignUp = () => {
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      gap: 10,
    },
    input: {
      height: 56,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderRadius: 4, // M3 Small rounding for text fields
      borderColor: theme.colors.outline,
      backgroundColor: theme.colors.surface,
    },
    inputError: {
      borderColor: theme.colors.error,
    },
    errorMessage: {
      color: theme.colors.error,
    },
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: () => {},
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
      {/* <TextInputErrorMessage formik={formik} invalidData={invalidData} /> */}
      <Button>Sign up</Button>
    </View>
  );
};

export default SignUp;
