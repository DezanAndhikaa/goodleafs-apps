import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ProductCardImage from "../ProductCard/ProductCardImage";

export default ListOrderCard = ({ image, title, id, status } = props) => {
  const [totalqty, setQty] = useState(qty);

  return (
    <View style={style.wrapperBody}>
      <View style={style.productWrapper}>
        <ProductCardImage color={color} image={image} />
      </View>

      <View style={style.wrapperDetail}>
        <Text numberOfLines={2}>{title}</Text>
        <Text style={style.idPembelian}>ID Pembelian #{id}</Text>
        <Text style={style.status}>{status}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrapperBody: {
    flexDirection: "row",
    height: 150,
    backgroundColor: "#F3F3F3",
    padding: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 10,
    marginBottom: 20,
  },

  productWrapper: {
    flex: 1.5,
  },

  wrapperDetail: {
    flex: 2,
    flexDirection: "column",
  },

  idPembelian: {
    color: "#9F9F9F",
    fontSize: 9,
    fontFamily: "segoe-ui",
  },

  status: {
    color: "#FD2963",
    fontSize: 9,
    fontFamily: "segoe-ui",
  },
});
