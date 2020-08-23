import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HeaderSign = ({ status, navigation } = props) => {
  return (
    <View style={style.viewStyle}>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignIn")}
        style={{ marginRight: 20 }}>
        <Text
          style={status === "signin" ? style.headerText : style.headerTextNon}>
          SIGN IN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text
          style={status === "signup" ? style.headerText : style.headerTextNon}>
          SIGN UP
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  logoStyle: {
    width: 90,
    height: 90,
  },
  viewStyle: {
    flexDirection: "row",
  },
  headerText: {
    textAlign: "center",
    fontSize: 15,
    color: "#77A22F",
    marginTop: 40,
    marginLeft: 10,
    fontFamily: "segoe-semi-bold",
    borderBottomColor: "#5B9865",
    borderBottomWidth: 2,
  },
  headerTextNon: {
    textAlign: "center",
    fontSize: 15,
    color: "#99A783",
    marginTop: 40,
    fontFamily: "segoe-semi-bold",
  },
});

export default HeaderSign;
