import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  listing,
  setListing,
}) => {
  const navigate = useNavigate();

  const openRepo = (id) => {
    console.log(`repository ${id} pressed`);
    navigate(`/repository/${id}`);
  };

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const LinstingHead = () => {
    return (
      <View style={{ padding: 4 }}>
        <Picker
          style={styles.openButton}
          selectedValue={listing}
          onValueChange={(itemValue) => setListing(itemValue)}
        >
          <Picker.Item
            label="Select an item..."
            enabled={false}
            color="lightgray"
          />
          <Picker.Item label="Latest repositories" value="CREATED_AT" />
          <Picker.Item label="Highest rated repositories" value="highrate" />
          <Picker.Item label="Lowest rated repositories" value="lowrate" />
        </Picker>
      </View>
    );
  };

  return (
    <FlatList
      style={{ backgroundColor: theme.backgroundColor.primary }}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => openRepo(item.id)}>
          <RepositoryItem props={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <LinstingHead />}
    />
  );
};

const RepositoryList = () => {
  const [listing, setListing] = useState("CREATED_AT");
  const { repositories } = useRepositories(listing);
  return (
    <RepositoryListContainer
      repositories={repositories}
      listing={listing}
      setListing={setListing}
    />
  );
};

export default RepositoryList;
