import React, { Component } from "react";
import { Text, StyleSheet, View, StatusBar, Image } from "react-native";
import LogoGoodleafs from "../../../assets/img/logos.png";

const HeaderSign = () => {
  return (
    <View style={style.viewStyle}>
      <Image source={LogoGoodleafs} style={style.logoStyle} />
      <Text style={style.headerText}>Goodleafs</Text>
    </View>
  );
};

const style = StyleSheet.create({
  logoStyle: {
    width: 70,
    height: 70,
  },
  viewStyle: {
    flexDirection: "row",
  },
  headerText: {
    textAlign: "center",
    fontSize: 23,
    color: "#77A22F",
    marginTop: 15,
    marginLeft: 10,
    fontFamily: "segoe-semi-bold",
  },
});

export default HeaderSign;
