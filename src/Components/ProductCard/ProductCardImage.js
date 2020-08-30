import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
var NumberFormat = require("react-number-format");

export default ProductCard = ({ image, color } = props) => {
  return (
    <View style={[style.cardContainer, { backgroundColor: color }]}>
      <Image source={image} style={style.productPictrue} />
    </View>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    width: 110,
    borderRadius: 12,
    flex: 1,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  productName: {
    color: "#FFF",
    fontFamily: "segoe-semi-bold",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
  productPrices: {
    color: "#FFF",
    fontFamily: "segoe-semi-bold",
    fontSize: 13,
    textAlign: "center",
  },
  productPictrue: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    flex: 1,
  },
});
