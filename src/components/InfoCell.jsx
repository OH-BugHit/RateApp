import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  flexColumn: {
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: "column",
    width: "auto",
  },
});

const parseValue = (value) => {
  let returnValue = value;
  if (Number(value) >= 1000) {
    returnValue = `${Math.round(value * 0.01) / 10}k`;
  }
  return returnValue;
};

const InfoCell = ({ text, value }) => {
  return (
    <View style={styles.flexColumn}>
      <Text>{parseValue(value)}</Text>
      <Text color="gray" textAlign="center">
        {text}
      </Text>
    </View>
  );
};

export default InfoCell;
