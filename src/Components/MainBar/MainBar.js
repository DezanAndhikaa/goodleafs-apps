import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import searchLogo from "../../../assets/img/search.png";
import cartLogo from "../../../assets/img/shopping.png";

export default MainBar = ({ navigation, category } = props) => {
  return (
    <View style={style.mainBarWrap}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Cart");
        }}>
        <Image source={cartLogo} style={style.icoStyle} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Search", { data: category });
        }}>
        <Image source={searchLogo} style={style.icosearch} />
      </TouchableOpacity>
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
