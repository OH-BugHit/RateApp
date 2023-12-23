import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.secondary,
    flexDirection: "row",
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab teksti={"Repositories"} route={"/"} />
        <AppBarTab teksti={"Login"} route={"/login"} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
