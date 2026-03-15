import { StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../../theme";

const TextInputErrorMessage = ({ formik, field, invalidData }) => {
  const styles = StyleSheet.create({
    errorMessage: {
      color: theme.colors.error,
    },
  });
  return (
    <View>
      {formik.touched?.[field] && formik.errors?.[field] ? (
        <Text style={styles.errorMessage}>{formik.errors?.[field]}</Text>
      ) : invalidData ? (
        <Text fontWeight="bold" style={styles.errorMessage}>
          {invalidData}
        </Text>
      ) : null}
    </View>
  );
};

export default TextInputErrorMessage;
