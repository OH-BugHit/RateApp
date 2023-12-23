import { Pressable } from "react-native";
import Text from "./Text";
import { useNavigate } from "react-router-native";

const AppBarTab = ({ teksti, route }) => {
  const navigate = useNavigate();

  const onPressed = (route) => {
    console.log(`navigating to ${route}`);
    navigate(route);
  };
  return (
    <Pressable style={{ padding: 8 }} onPressIn={() => onPressed(route)}>
      <Text color="textSecondary" fontSize="heading">
        {teksti}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
