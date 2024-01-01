import { Pressable, View } from "react-native";
import useMe from "../hooks/useMe";
import { ReviewItem } from "./SingleRepository";
import { FlatList } from "react-native";
import theme, { themeStyles } from "../theme";
import Text from "./Text";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";

const ItemSeparator = () => <View style={themeStyles.separator} />;

const MyReviews = () => {
  const [deleteReview] = useDeleteReview();

  const { me, refetch } = useMe(true);
  const navigate = useNavigate();
  if (me === null) return null;

  const onPress = (url) => {
    navigate(`/repository/${url}`);
  };

  const onDelete = async (item) => {
    try {
      const { data } = await deleteReview({
        item,
      });
      refetch();
      console.log(data);
    } catch (e) {
      console.log(`Ei voitu poistaa... ${e}`);
    }
  };

  return (
    <FlatList
      style={{ backgroundColor: theme.backgroundColor.primary }}
      data={me.reviews.edges}
      renderItem={({ item }) => (
        <View>
          <ReviewItem
            review={item.node}
            repoName={item.node.repository.fullName}
          />
          <View
            style={{
              flexDirection: "row",
              padding: 4,
              justifyContent: "space-evenly",
              backgroundColor: theme.backgroundColor.itemBackground,
            }}
          >
            <Pressable
              style={themeStyles.openButton}
              onPress={() => onPress(item.node.repositoryId)}
            >
              <Text color="white" fontSize="heading" textAlign="center">
                View repository
              </Text>
            </Pressable>
            <Pressable
              style={themeStyles.deleteButton}
              onPress={() => onDelete(item.node.id)}
            >
              <Text color="white" fontSize="heading" textAlign="center">
                Delete review
              </Text>
            </Pressable>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.node.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
