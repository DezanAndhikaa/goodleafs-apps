import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import GroupImage from "../../../assets/img/groups.png";

export default class Search extends Component {
  render() {
    return (
      <View style={style.body}>
        <Text style={style.title}> Cari Produk </Text>

        <TextInput style={style.textInput} placeholder="Ketik nama produk..." />
        <Image
          source={GroupImage}
          style={{
            width: "90%",
            resizeMode: "contain",
          }}
        />

        <TouchableOpacity
          style={style.pesanProdukButton}
          onPress={() => {
            this.props.navigation.navigate("DetailSearch");
          }}>
          <Text style={style.wordPesanProduk}>Cari Produk</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    padding: 20,
    flex: 1,
    backgroundColor: "#FFF",
  },
  title: {
    fontFamily: "segoe-bold",
    fontSize: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  textInput: {
    paddingHorizontal: 10,
    height: 46,
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
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
