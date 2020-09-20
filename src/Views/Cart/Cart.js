import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import Headers from "../../Components/Header/Header";
import CartCard from "../../Components/CartCard/CartCard";
import Apel from "../../../assets/img/products/Apel.png";
import { ScrollView } from "react-native-gesture-handler";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("local.db");

export default class Cart extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    db.transaction((tx) => {
      tx.executeSql("select * from cart", [], (_, { rows }) => {
        this.setState({
          data: rows._array,
        });
      });
    });
  }

  deleteProductCart = (idProduct) => {
    db.transaction((tx) => {
      tx.executeSql(
        "delete from cart where idProduct=?",
        [idProduct],
        (_, { rows }) => {
          this.setState({
            data: rows._array,
          });
        }
      );
    });
  };

  render() {
    return (
      <View style={style.body}>
        <Headers navigation={this.props.navigation} />
        <Text style={style.title}>
          Daftar {"\n"}
          Belanjaan
        </Text>
        <View style={style.wrapperCard}>
          <ScrollView>
            {this.state.data.map((data, index) => {
              return (
                <View key={index}>
                  <CartCard
                    image={{ uri: data.imageUrl }}
                    namaProduct={data.productName}
                    color={data.baseColor}
                    qty={data.qty}
                    prices={data.cost}
                    deleteFunction={() =>
                      this.deleteProductCart(data.idProduct)
                    }
                  />
                </View>
              );
            })}
          </ScrollView>

          <TouchableOpacity style={style.pesanProdukButton}>
            <Text style={style.wordPesanProduk}>Pesan Produk</Text>
          </TouchableOpacity>
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
    backgroundColor: "#FFF",
    flex: 1,
  },

  backTextStyle: {
    fontFamily: "segoe-bold",
    fontSize: 17,
  },

  wrapperCard: {
    flex: 1,
    flexDirection: "column",
  },

  pesanProdukButton: {
    width: "auto",
    height: 50,
    backgroundColor: "#03AC0E",
    marginTop: 60,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
  },

  wordPesanProduk: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "segoe-bold",
    textAlign: "center",
  },
});
