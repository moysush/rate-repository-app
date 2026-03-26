import { Button as PaperButton } from "react-native-paper";

const Button = ({ children, onPress, style }) => {
  return (
    <PaperButton
      mode="contained"
      style={{ marginVertical: 4, ...style }}
      onPress={onPress}
    >
      {children}
    </PaperButton>
  );
};

export default Button;
