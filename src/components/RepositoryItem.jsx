import { View, Image, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import theme from "../theme";
import InfoCell from "./InfoCell";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import { Linking } from "react-native";

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
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.backgroundColor.itemBackground,
    padding: 4,
    margin: 4,
  },
  flexRow: {
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: "row",
  },
  flexColumn: {
    marginLeft: 6,
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: "column",
    width: "auto",
  },
  flexItemB: {
    padding: 4,
    flexShrink: 1,
  },
  flexItemLanguage: {
    flex: 0,
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 4,
    width: "auto",
  },
  evenlyDistributedRow: {
    marginTop: 8,
    marginBottom: 8,
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  openButton: {
    flexGrow: 1,
    justifyContent: "center",
    margin: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 4,
    minHeight: 42,
  },
});

const RepositoryItem = ({ props }) => {
  const { id } = useParams();

  if (props === undefined) {
    const { repository } = useRepository(id);
    props = repository ? repository : {};
  }

  const onPress = (url) => {
    Linking.openURL(url);
  };

  const ifSingle = () => {
    if (!id) {
      return null;
    }
    return (
      <Pressable style={styles.openButton} onPress={() => onPress(props.url)}>
        <Text color="white" fontSize="heading" textAlign="center">
          Open in GitHub
        </Text>
      </Pressable>
    );
  };

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
      {ifSingle()}
    </View>
  );
};

export default RepositoryItem;
