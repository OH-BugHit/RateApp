import { FlatList, View, StyleSheet, Pressable, TextInput } from "react-native";
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Text from "./Text";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  openRepo,
  LinstingHead,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

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
  const [search, setSearch] = useState("");
  const { repositories } = useRepositories(listing);
  const navigate = useNavigate();

  const openRepo = (id) => {
    console.log(`repository ${id} pressed`);
    navigate(`/repository/${id}`);
  };

  const LinstingHead = () => {
    console.log(search);
    return (
      <View style={{ padding: 4 }}>
        <View
          style={{
            backgroundColor: theme.backgroundColor.itemBackground,
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            margin: 8,
            borderRadius: 8,
            padding: 10,
          }}
        >
          <TextInput
            onChangeText={(value) => setSearch(value)}
            value={search}
            style={{ flexGrow: 1 }}
          ></TextInput>
          <Pressable onPress={() => setSearch("")}>
            <Text fontSize="heading" style={{ paddingHorizontal: 6 }}>
              X
            </Text>
          </Pressable>
        </View>
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
    <RepositoryListContainer
      repositories={repositories}
      openRepo={openRepo}
      LinstingHead={LinstingHead}
    />
  );
};

export default RepositoryList;
