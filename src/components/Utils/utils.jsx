import { Alert, Button, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export const createTwoButtonAlert = ({ cancelPress, confirmPress }) => {
  Alert.alert(
    "Delete review",
    "Are you sure you want to delete this review?"[
      ({
        text: "Cancel",
        onPress: { cancelPress },
        style: "cancel",
      },
      {
        text: "OK",
        onPress: { confirmPress },
        style: "destructive",
      })
    ]
  );
  return (
    <View style={styles.container}>
      <Button title={"2-Button Alert"} onPress={confirmPress} />
    </View>
  );
};
