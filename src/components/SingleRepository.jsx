import { FlatList, Linking, Pressable, View } from "react-native";
import Text from "./Text";
import theme, { themeStyles } from "../theme";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";

const ParseDate = (date) => {
  if (!date) return null;
  const short = String(date).substring(0, 10).split("-");
  return `${short[2]}.${short[1]}.${short[0]}`;
};

export const ReviewItem = ({ review, repoName }) => {
  if (!review) {
    return null;
  }

  const headerName =
    review.user !== undefined ? review.user.username : repoName;

  console.log(headerName);
  return (
    <View style={themeStyles.flexContainer}>
      <View style={themeStyles.flexRow}>
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

        <View style={themeStyles.flexColumn}>
          <Text fontWeight={"bold"} fontSize={"subheading"}>
            {headerName}
          </Text>
          <Text color={"gray"}>{ParseDate(review.createdAt)}</Text>
          <Text style={{ marginTop: 8 }}>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const ItemSeparator = () => <View style={themeStyles.separator} />;

const RepositoryInfo = ({ props }) => {
  const onPress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View>
      <RepositoryItem props={props} />
      <Pressable
        style={themeStyles.openButton}
        onPress={() => onPress(props.url)}
      >
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
      renderItem={({ item }) => (
        <ReviewItem review={item.node} repoName={null} />
      )}
      keyExtractor={(item) => item.node.id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryInfo props={props} />}
    />
  );
};

export default SingleRepository;
