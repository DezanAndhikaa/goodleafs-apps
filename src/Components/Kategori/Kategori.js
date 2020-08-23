import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default Kategori = ({ image, title } = props) => {
  return (
    <View style={style.wrapper}>
      <Image source={image} />
      <Text
        style={{
          fontFamily: "segoe-semi-bold",
          fontSize: 12,
        }}>
        {title}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    width: "auto",
    height: 55,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderRadius: 8,
    marginBottom: 15,

    paddingTop: 14,
    paddingLeft: 10,
    paddingRight: 15,

    flexDirection: "row",
  },
});
