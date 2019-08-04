import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";

class A extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#9aaad9", margin: 15 }}>
        <View style={{ flex: 1, backgroundColor: "red", margin: 15 }}>
          <ScrollView horizontal>
            <View
              style={{
                width: 80,
                height: 80,
                borderWidth: 3,
                borderColor: "yellow",
                margin: 10,
                borderRadius: 1000
              }}
            >
              <Image
                style={{
                  flex: 1,
                  width: 75,
                  height: 75,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRadius: 1000
                }}
                resizeMode="stretch"
                source={require("./2.jpg")}
              />
            </View>
          </ScrollView>
        </View>
        <View style={{ flex: 5, backgroundColor: "#9aaad9", margin: 15 }}>
          <Text>aaaaa</Text>
        </View>
      </View>
    );
  }
}
export default A;
