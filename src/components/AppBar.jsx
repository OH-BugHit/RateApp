import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import useMe from "../hooks/useMe";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.secondary,
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { me } = useMe();

  // Ehdollinen singin/out näyttäminen sen mukaan, onko 'me' haun tulos null vai ei
  const loggedDisplay = () => {
    const tulos = me;
    if (tulos === null || tulos.me === null) {
      // If not logged in
      return <AppBarTab teksti={"Sing in"} route={"/login"} />;
    } else {
      return (
        <>
          <AppBarTab teksti={"Create a review"} route={"/create_review"} />
          <AppBarTab teksti={"Sing out"} route={"/"} />
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab teksti={"Repositories"} route={"/"} />
        {loggedDisplay()}
      </ScrollView>
    </View>
  );
};

export default AppBar;
