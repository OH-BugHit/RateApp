import { View, Image, StyleSheet } from "react-native";
import Text from "../Utils/Text";
import theme from "../../theme";
import InfoCell from "./InfoCell";

const imageStyle = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const styles = StyleSheet.create({
  flexContainer: {
    backgroundColor: theme.backgroundColor.itemBackground,
    padding: 4,
    margin: 4,
    paddingTop: 10,
  },
  flexRow: {
    flexShrink: 1,
    flexDirection: "row",
  },
  flexColumn: {
    marginLeft: 6,
    flexShrink: 1,
    flexDirection: "column",
  },
  flexItemB: {
    padding: 4,
    flexShrink: 1,
  },
  flexItemLanguage: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 4,
  },
  evenlyDistributedRow: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const RepositoryItem = ({ props }) => {
  return (
    <View testID="repositoryItem" style={styles.flexContainer}>
      <View style={styles.flexRow}>
        <Image
          style={imageStyle.tinyLogo}
          source={{ uri: props.ownerAvatarUrl }}
        ></Image>
        <View style={styles.flexColumn}>
          <View style={styles.flexItemB}>
            <Text fontWeight="bold">{props.fullName} </Text>
            <Text>{props.description} </Text>
          </View>
          <View style={styles.flexItemLanguage}>
            <Text textAlign="center" color="white">
              {props.language}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.evenlyDistributedRow}>
        <InfoCell text="Stars" value={props.stargazersCount}></InfoCell>
        <InfoCell text="Forks" value={props.forksCount}></InfoCell>
        <InfoCell text="Reviews" value={props.reviewCount}></InfoCell>
        <InfoCell text="Rating" value={props.ratingAverage}></InfoCell>
      </View>
    </View>
  );
};

export default RepositoryItem;
