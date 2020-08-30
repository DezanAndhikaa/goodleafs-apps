import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import NavBack from "../../../assets/img/products/BackArrowBlack.png";
import LogoChart from "../../../assets/img/shopping.png";

export default Headers = ({ navigation } = props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={{
          marginBottom: 24,
          flex: 1,
          flexDirection: "row",
        }}
        onPress={() => navigation.goBack()}>
        <Image
          source={NavBack}
          style={{
            resizeMode: "contain",
            width: 25,
            height: 25,
            marginTop: -2,
            marginLeft: -5,
          }}
        />

        <Text style={style.backTextStyle}>Kembali</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Cart");
        }}>
        <Image source={LogoChart} style={style.icoStyle} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  backTextStyle: {
    fontFamily: "segoe-bold",
    fontSize: 17,
  },

  icoStyle: {
    resizeMode: "contain",
    width: 26,
    marginRight: 30,
    marginLeft: "auto",
    marginTop: -25,
  },
});
