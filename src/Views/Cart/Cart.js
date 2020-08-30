import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import Headers from "../../Components/Header/Header";
import CartCard from "../../Components/CartCard/CartCard";
import Apel from "../../../assets/img/products/Apel.png";
import { ScrollView } from "react-native-gesture-handler";

export default class Cart extends Component {
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
            <CartCard
              image={Apel}
              namaProduct="Apel Manis"
              color="#869428"
              qty="4"
              prices="9000"
            />

            <CartCard
              image={Apel}
              namaProduct="Apel Manis"
              color="#869428"
              qty="4"
              prices="9000"
            />

            <CartCard
              image={Apel}
              namaProduct="Apel Manis"
              color="#869428"
              qty="4"
              prices="9000"
            />
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
