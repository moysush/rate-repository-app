import { Text as PaperText } from "react-native-paper";

const Text = ({ ...props }) => {
  return <PaperText variant="bodyMedium" {...props}></PaperText>;
};

export default Text;
