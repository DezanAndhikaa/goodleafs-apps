import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default MenuBar = () => {
  return (
    <View style={style.menuBarWrap}>
      <Text>Salam</Text>
    </View>
  );
};

const style = StyleSheet.create({
  menuBarWrap: {
    alignContent: "flex-end",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#E6E6E6",
    height: 56,
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
  },
});
