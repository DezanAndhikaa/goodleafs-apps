import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default Kategori = ({ image, title } = props) => {
  return (
    <View style={style.wrapper}>
      <Image source={image} style={style.imagesStyle} />
      <Text
        style={{
          fontFamily: "segoe-semi-bold",
          fontSize: 12,
          marginTop: 5,
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
    marginRight: 15,

    flexDirection: "row",
  },

  imagesStyle: {
    width: 30,
    height: 30,
    marginRight: 7,
    resizeMode: "contain",
  },
});
