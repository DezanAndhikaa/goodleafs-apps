import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Headers from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import JerukManis from "../../../assets/img/products/Jeruks.png";

const data = [
  {
    color: "orange",
    nameProduct: "Jeruk Mantap",
    image: JerukManis,
    prices: "4000",
  },
  {
    color: "orange",
    nameProduct: "Jeruk Mantap",
    image: JerukManis,
    prices: "5000",
  },
  {
    color: "orange",
    nameProduct: "Jeruk Mantap",
    image: JerukManis,
    prices: "7000",
  },
  {
    color: "orange",
    nameProduct: "Jeruk Mantap",
    image: JerukManis,
    prices: "9000",
  },
];

export default class Wishlist extends Component {
  render() {
    return (
      <View style={style.body}>
        <Headers navigation={this.props.navigation} />
        <Text style={style.title}>
          Daftar {"\n"}
          WishList
        </Text>
        <View style={style.wrapperBody}>
          {data.map((data, index) => (
            <View style={style.styleItem} key={index}>
              <ProductCard
                color={data.color}
                nameProduct={data.nameProduct}
                prices={data.prices}
                image={data.image}
              />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  title: {
    fontFamily: "segoe-bold",
    fontSize: 25,
    marginBottom: 40,
  },

  body: {
    padding: 25,
    flex: 1,
    backgroundColor: "#FFF",
  },

  wrapperList: {
    flex: 1,
  },

  wrapperCard: {
    height: 200,
  },

  wrapperBody: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: 0,
  },

  styleItem: {
    flexBasis: "50%",
    height: 200,
    marginBottom: 30,
  },
});
