import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import FbLogo from "../../../assets/img/fb.png";

export default FacebookButton = () => {
  return (
    <View
      style={{
        borderColor: "#2699FB",
        borderRadius: 10,
        borderWidth: 2,
        height: 48,
        width: "100%",
        alignSelf: "stretch",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Image
        source={FbLogo}
        style={{
          marginRight: 20,
        }}
      />
      <Text
        style={{
          color: "#2699FB",
          fontFamily: "segoe-semi-bold",
        }}>
        Login With Facebook
      </Text>
    </View>
  );
};
