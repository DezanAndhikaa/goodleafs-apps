import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ProductCardImage from "../ProductCard/ProductCardImage";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ListOrderCard = ({
  image,
  title,
  id,
  status,
  color,
  navigation,
} = props) => {
  return (
    <TouchableOpacity
      style={style.wrapperBody}
      onPress={() =>
        navigation.navigate("DetailOrder", {
          idPembelian: id,
        })
      }>
      <View style={style.productWrapper}>
        <ProductCardImage color={color} image={image} />
      </View>

      <View style={style.wrapperDetail}>
        <Text numberOfLines={2} style={style.title}>
          {title}
        </Text>
        <Text style={style.idPembelian}>ID Pembelian #{id}</Text>
        <Text style={style.status}>{status}</Text>
      </View>
    </TouchableOpacity>
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
    justifyContent: "space-between",
  },

  idPembelian: {
    color: "#9F9F9F",
    fontSize: 12,
    fontFamily: "segoe-ui",
  },

  status: {
    color: "#FD2963",
    fontSize: 12,
    fontFamily: "segoe-ui",
  },

  title: {
    fontSize: 18,
  },
});
