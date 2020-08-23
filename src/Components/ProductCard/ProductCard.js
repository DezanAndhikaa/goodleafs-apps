import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// import NumberFormat from "react-number-format";
var NumberFormat = require("react-number-format");

export default ProductCard = ({
  image,
  color,
  prices,
  nameProduct,
} = props) => {
  return (
    <View style={[style.cardContainer, { backgroundColor: color }]}>
      <Image source={image} style={style.productPictrue} />
      <View>
        <Text style={style.productName}>{nameProduct}</Text>
        <NumberFormat
          value={prices}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rp "}
          renderText={(value) => (
            <Text style={style.productPrices}>{value}</Text>
          )}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: 147,
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
    alignItems: "center",
    padding: 10,
    paddingTop: 20,
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
  },
});
