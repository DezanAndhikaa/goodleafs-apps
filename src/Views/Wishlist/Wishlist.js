import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Headers from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import JerukManis from "../../../assets/img/products/Jeruks.png";
import * as SQLite from "expo-sqlite";
import { set } from "react-native-reanimated";
import Axios from "axios";

const db = SQLite.openDatabase("dev6.db");

const data = [
  {
    color: "orange",
    nameProduct: "Jeruk Manis",
    image: JerukManis,
    prices: "4000",
  },
  {
    color: "orange",
    nameProduct: "Jeruk Orange",
    image: JerukManis,
    prices: "5000",
  },
  {
    color: "orange",
    nameProduct: "Jeruk Balil",
    image: JerukManis,
    prices: "7000",
  },
];

export default class Wishlist extends Component {
  state = {
    dataWishlist: [],
    Id: [],
  };

  renderWishlist = () => {
    return this.state.dataWishlist.map((data, index) => (
      <TouchableOpacity
        style={style.styleItem}
        key={index}
        onPress={() =>
          this.props.navigation.navigate("DetailProduct", {
            image: {
              uri: `https://3a78a3e1bf39.ngrok.io/Resources/Products/${data.ImageUrl}`,
            },
            baseColor: data.BaseColor,
            description: data.Description,
            idProduct: data.IdProduct,
            price: data.Cost,
            productName: data.ProductName,
            productCategory: data.CategoryName,
          })
        }>
        <ProductCard
          color={data.BaseColor}
          nameProduct={data.ProductName}
          prices={data.Cost}
          image={{
            uri: `https://3a78a3e1bf39.ngrok.io/Resources/Products/${data.ImageUrl}`,
          }}
        />
      </TouchableOpacity>
    ));
  };

  componentDidMount() {
    var IdProducts = [];
    db.transaction((tx) => {
      tx.executeSql(
        "select * from bookmark",
        [],
        (err, { rows }) => {
          if (rows.length > 0) {
            rows._array.map((data) => {
              IdProducts.push(data.idProduct);
            });
            Axios.post("https://3a78a3e1bf39.ngrok.io/api/Client/bookmark", {
              IdProducts,
            }).then((e) => {
              this.setState({
                dataWishlist: e.data,
              });
            });
          }
        },
        (_, error) => {
          console.log(error);
        }
      );
    });
  }

  render() {
    return (
      <View style={style.body}>
        <Headers navigation={this.props.navigation} />
        <Text style={style.title}>
          Daftar {"\n"}
          WishList
        </Text>
        <View style={style.wrapperBody}></View>
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
