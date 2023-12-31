import { FlatList, Linking, Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  flexContainer: {
    backgroundColor: theme.backgroundColor.itemBackground,
    padding: 10,
  },
  flexRow: {
    flexDirection: "row",
    margin: 2,
  },
  flexColumn: {
    marginLeft: 6,
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: "column",
  },
  openButton: {
    justifyContent: "center",
    margin: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 4,
  },
});

const parseDate = (date) => {
  if (!date) return null;
  const short = String(date).substring(0, 10).split("-");
  return `${short[2]}.${short[1]}.${short[0]}`;
};

const ReviewItem = ({ review }) => {
  if (!review) {
    return null;
  }

  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexRow}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderColor: "blue",
            borderWidth: 2,
            height: 60,
            width: 60,
            borderRadius: 30,
            margin: 8,
          }}
        >
          <Text fontSize={"heading"} color={"blue"}>
            {review.rating}
          </Text>
        </View>

        <View style={styles.flexColumn}>
          <Text fontWeight={"bold"}>{review.user.username}</Text>
          <Text color={"gray"}>{parseDate(review.createdAt)}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const ItemSeparator = () => <View style={styles.separator} />; // keyt oikein, missä lie mättää kun ei scrollaa...

const RepositoryInfo = ({ props }) => {
  const onPress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View>
      <RepositoryItem props={props} />
      <Pressable style={styles.openButton} onPress={() => onPress(props.url)}>
        <Text color="white" fontSize="heading" textAlign="center">
          Open in GitHub
        </Text>
      </Pressable>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();

  const { repository } = useRepository(id);
  const props = repository ? repository : {};

  if (props.id === undefined) {
    return null;
  }

  return (
    <FlatList
      style={{ backgroundColor: theme.backgroundColor.primary }}
      data={repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={(item) => item.node.id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryInfo props={props} />}
    />
  );
};

export default SingleRepository;
