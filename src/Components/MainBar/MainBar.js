import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import searchLogo from "../../../assets/img/search.png";
import cartLogo from "../../../assets/img/shopping.png";

export default MainBar = () => {
  return (
    <View style={style.mainBarWrap}>
      <Image source={cartLogo} style={style.icoStyle} />
      <Image source={searchLogo} style={style.icosearch} />
    </View>
  );
};

const style = StyleSheet.create({
  mainBarWrap: {
    alignContent: "flex-end",
    flexDirection: "row-reverse",
  },

  icoStyle: {
    resizeMode: "contain",
    width: 26,
    marginRight: 30,
  },

  icosearch: {
    resizeMode: "contain",
    width: 40,
    marginRight: 20,
    marginTop: -5,
  },
});
