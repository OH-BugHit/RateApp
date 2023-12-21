import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = () => {
  return (
    <Pressable style={{ padding: 8 }} onpress={console.log("pressed")}>
      <Text color="textSecondary" fontSize="heading">
        Repositories
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
