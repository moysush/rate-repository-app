import { StyleSheet, View } from "react-native";
import { TextInput as PaperInput, useTheme } from "react-native-paper";
import TextInputErrorMessage from "./TextInputErrorMessage";

const TextInput = ({ formik, field, placeholder, ...rest }) => {
  const paperTheme = useTheme();
  const styles = StyleSheet.create({
    // input: {
    //   height: 56,
    //   paddingHorizontal: 16,
    //   borderWidth: 1,
    //   borderRadius: 4, // M3 Small rounding for text fields
    //   borderColor: theme.colors.outline,
    //   backgroundColor: theme.colors.surface,
    // },
    inputError: {
      borderColor: paperTheme.colors.error,
    },
  });
  return (
    <View style={{ gap: 4 }}>
      <PaperInput
        style={[styles.input, formik.errors?.[field] && styles.inputError]}
        placeholder={placeholder}
        value={formik.values?.[field]}
        onChangeText={formik.handleChange(field)}
        onBlur={formik.handleBlur(field)}
        {...rest}
      />
      <TextInputErrorMessage formik={formik} field={field} />
    </View>
  );
};

export default TextInput;
