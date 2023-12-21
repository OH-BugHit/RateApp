import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

const RepositoryItem = ({ props }) => {
  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={{ uri: props.ownerAvatarUrl }}
      ></Image>
      <Text>Full Name: {props.fullName} </Text>
      <Text>Description: {props.description} </Text>
      <Text>Language: {props.language} </Text>
      <Text>Stars: {props.stargazersCount} </Text>
      <Text>Forks: {props.forksCount} </Text>
      <Text>Reviews: {props.reviewCount} </Text>
      <Text>Rating: {props.ratingAverage} </Text>
    </View>
  );
};

export default RepositoryItem;
