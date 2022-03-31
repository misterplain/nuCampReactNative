import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }

  //js keyword that sets a record on the object itself
  static navigationOptions = {
    title: "Directory",
  };
  render() {
    const { navigate } = this.props.navigation;
    //flatlist will iteration through every item in the array through it's data prop
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          onPress={() => navigate("CampsiteInfo", { campsiteId: item.id })}
          leftAvatar={{ source: require("./images/react-lake.jpg") }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.campsites}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Directory;
