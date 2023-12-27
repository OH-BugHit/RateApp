import { Pressable } from "react-native";
import Text from "./Text";
import { useNavigate } from "react-router-native";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const AppBarTab = ({ teksti, route }) => {
  const navigate = useNavigate();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const onPressed = (route) => {
    if (teksti === "Sing out") {
      // Ehdollinen lisäys jos sing out
      authStorage.removeAccessToken();
      apolloClient.resetStore();
    }
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
