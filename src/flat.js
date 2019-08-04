import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

class App extends Component {
  render() {
    const myarray = ["_Calculator", "_flat", "pick"];
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "orange",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch"
        }}
      >
        <FlatList
          style={{ flex: 1, alignSelf: "stretch", margin: 20, borderWidth: 1 }}
          data={myarray}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: 70,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  backgroundColor: "coral",
                  borderWidth: 1,
                  marginTop: index == 0 ? 0 : 30,
                  borderTopRightRadius: 35,
                  borderBottomLeftRadius: 35
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#ffbaf9",
                    borderTopLeftRadius: 35,
                    borderBottomRightRadius: 35,
                    alignSelf: "stretch",
                    margin: 12
                  }}
                  onPress={() => {
                    this.props.navigation.navigate("_A");
                  }}
                >
                  <Text style={{ fontSize: 30, color: "#7242f5" }}>{item}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

export default App;
