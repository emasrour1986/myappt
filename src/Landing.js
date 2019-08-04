import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import A from "./A";

class Landing extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#bafff2"
        }}
      >
        <Text style={{ fontSize: 45, color: "#7242f5" }}> Landing </Text>
        <TouchableOpacity
          style={{
            width: "70%",
            height: "15%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffbaf9",
            borderTopLeftRadius: 35,
            borderBottomRightRadius: 35,
            margin: 20
          }}
          onPress={() => {
            this.props.navigation.navigate("_flat");
          }}
        >
          <Text style={{ fontSize: 30, color: "#7242f5" }}>go to page A</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "70%",
            height: "15%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffbaf9",
            borderTopLeftRadius: 35,
            borderBottomRightRadius: 35,
            margin: 20
          }}
          onPressIn={() => {
            this.props.navigation.navigate("_B");
          }}
        >
          <Text style={{ fontSize: 30, color: "#7242f5" }}>go to page B</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Landing;
