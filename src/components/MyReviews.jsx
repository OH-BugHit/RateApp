import { View } from "react-native";
import useMe from "../hooks/useMe";
import { ReviewItem } from "./SingleRepository";
import { FlatList } from "react-native";
import theme, { themeStyles } from "../theme";

const ItemSeparator = () => <View style={themeStyles.separator} />;

const MyReviews = () => {
  const { me } = useMe(true);
  if (me === null) return null;

  return (
    <FlatList
      style={{ backgroundColor: theme.backgroundColor.primary }}
      data={me.reviews.edges}
      renderItem={({ item }) => (
        <ReviewItem
          review={item.node}
          repoName={item.node.repository.fullName}
        />
      )}
      keyExtractor={(item) => item.node.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
