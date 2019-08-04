import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, flexDirection: "row", backgroundColor: "#b3ffff" }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "stretch"
            }}
          >
            <Text
              style={{
                marginLeft: 5,
                marginRight: 5,
                fontSize: 22
              }}
            >
              view
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "stretch"
            }}
          >
            <Text
              style={{
                marginLeft: 5,
                marginRight: 5,
                fontSize: 22
              }}
            >
              edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "stretch"
            }}
          >
            <Text
              style={{
                marginLeft: 5,
                marginRight: 5,
                fontSize: 22
              }}
            >
              help
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 9, backgroundColor: "pink" }}>
          <View
            style={{
              flex: 2,
              backgroundColor: "#99ffcc",
              margin: 10,
              borderColor: "black",
              borderWidth: 2,
              flexDirection: "column-reverse",
              alignItems: "flex-end"
            }}
          >
            <Text style={{ fontSize: 40, margin: 5 }}>0</Text>
          </View>

          <View
            style={{
              flex: 8,
              backgroundColor: "green",
              margin: 10,
              marginTop: 0,
              padding: 2,
              flexDirection: "column"
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#ffff99",
                margin: 2,
                marginTop: 0,
                flexDirection: "row-reverse",
                justifyContent: "space-between"
              }}
            >
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>M-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>M+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>MS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>MR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>MC</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#15d1a4",
                margin: 2,
                marginTop: 0,
                flexDirection: "row-reverse",
                justifyContent: "space-between"
              }}
            >
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>^^</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>+-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>C</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>CE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>undo</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#15d1a4",
                margin: 2,
                marginTop: 0,
                flexDirection: "row-reverse",
                justifyContent: "space-between"
              }}
            >
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>%</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>/</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>7</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#15d1a4",
                margin: 2,
                marginTop: 0,
                flexDirection: "row-reverse",
                justifyContent: "space-between"
              }}
            >
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>1/x</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>*</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "18%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                  borderWidth: 2,
                  margin: 2,
                  alignSelf: "stretch"
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 22 }}>4</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 2,
                backgroundColor: "#ffff99",
                margin: 2,
                marginTop: 0,
                flexDirection: "row-reverse",
                justifyContent: "space-between"
              }}
            >
              <View
                style={{
                  flex: 1,
                  margin: 2,
                  marginTop: 0,
                  flexDirection: "row-reverse",
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "black",
                    borderWidth: 2,
                    margin: 2,
                    alignSelf: "stretch"
                  }}
                >
                  <Text style={{ marginRight: 5, fontSize: 22 }}>=</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  margin: 2,
                  marginTop: 0,
                  flexDirection: "column-reverse",
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "black",
                    borderWidth: 2,
                    margin: 2,
                    alignSelf: "stretch"
                  }}
                >
                  <Text style={{ marginRight: 5, fontSize: 22 }}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "black",
                    borderWidth: 2,
                    margin: 2,
                    alignSelf: "stretch"
                  }}
                >
                  <Text style={{ marginRight: 5, fontSize: 22 }}>+</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  margin: 2,
                  marginTop: 0,
                  flexDirection: "column-reverse",
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "black",
                    borderWidth: 2,
                    margin: 2,
                    alignSelf: "stretch"
                  }}
                >
                  <Text style={{ marginRight: 5, fontSize: 22 }}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "black",
                    borderWidth: 2,
                    margin: 2,
                    alignSelf: "stretch"
                  }}
                >
                  <Text style={{ marginRight: 5, fontSize: 22 }}>3</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 2,
                  margin: 2,
                  marginTop: 0,
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <View
                  style={{
                    flex: 1,
                    margin: 2,
                    marginTop: 0,
                    flexDirection: "row-reverse",
                    justifyContent: "space-between"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "black",
                      borderWidth: 2,
                      margin: 2,
                      alignSelf: "stretch"
                    }}
                  >
                    <Text style={{ marginRight: 5, fontSize: 22 }}>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "black",
                      borderWidth: 2,
                      margin: 2,
                      alignSelf: "stretch"
                    }}
                  >
                    <Text style={{ marginRight: 5, fontSize: 22 }}>1</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 1,
                    margin: 2,
                    marginTop: 0,
                    justifyContent: "space-between"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "black",
                      borderWidth: 2,
                      margin: 2,
                      alignSelf: "stretch"
                    }}
                  >
                    <Text style={{ marginRight: 5, fontSize: 22 }}>0</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default App;
