import { FlatList, View, Pressable, TextInput } from "react-native";
import RepositoryItem from "./RepositoryItem";
import theme, { themeStyles } from "../theme";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Text from "./Text";
import React from "react";
import { useDebounce } from "use-debounce";

const ItemSeparator = () => <View style={themeStyles.separator} />;

export class RepositoryListContainer extends React.Component {
  openRepo = (id) => {
    console.log(`repository ${id} pressed`);
    this.props.navigate(`/repository/${id}`);
  };

  renderHeader = () => {
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
          <Text fontSize={"heading"} style={{ paddingHorizontal: 10 }}>
            🔎
          </Text>
          <TextInput
            onChangeText={(value) => this.props.setSearch(value)}
            value={this.props.search}
            style={{ flexGrow: 1 }}
          ></TextInput>
          <Pressable onPress={() => this.props.setSearch("")}>
            <Text fontSize="heading" style={{ paddingHorizontal: 6 }}>
              ✖️
            </Text>
          </Pressable>
        </View>
        <Picker
          selectedValue={this.props.listing}
          onValueChange={(itemValue) => this.props.setListing(itemValue)}
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

  render() {
    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        style={{ backgroundColor: theme.backgroundColor.primary }}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Pressable onPress={() => this.openRepo(item.id)}>
            <RepositoryItem props={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

const RepositoryList = () => {
  const [listing, setListing] = useState("CREATED_AT");
  const [search, setSearch] = useState("");
  const [bounce] = useDebounce(search, 200);
  const { repositories } = useRepositories(listing, bounce);
  const navigate = useNavigate();

  return (
    <RepositoryListContainer
      repositories={repositories}
      navigate={navigate}
      listing={listing}
      setListing={setListing}
      search={search}
      setSearch={setSearch}
      bounce={bounce}
    />
  );
};

export default RepositoryList;
