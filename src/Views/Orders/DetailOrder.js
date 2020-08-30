import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Header from "../../Components/Header/Header";
import Notes from "../../../assets/img/note.png";

export default class DetailOrder extends Component {
  render() {
    return (
      <View style={style.body}>
        <Header navigation={this.props.navigation} />
        <Text style={style.title}>
          Detail {"\n"}
          Pemesanan
        </Text>

        <View style={style.wrapperDetail}>
          <Text style={style.statusPemesanan}>Status Pemesanan</Text>
          <View style={style.wrapperNotes}>
            <Image source={Notes} />
          </View>
          <Text style={style.idPemesanan}>
            Id Pembelian: #{this.props.navigation.getParam("idPembelian")}
          </Text>
          <Text style={style.status}>Menunggu Pembayaran</Text>
        </View>

        <Text style={style.titles}>Detail Produk</Text>
        <View style={style.wrapperItem}>
          <Text>Sayur Kangkung</Text>
          <Text>Rp 10,000</Text>
        </View>

        <View style={style.wrapperItem}>
          <Text>Jeruk Manis</Text>
          <Text>Rp 5,000</Text>
        </View>

        <View style={style.wrapperItem}>
          <Text>Apel Medan</Text>
          <Text>Rp 7,000</Text>
        </View>

        <View style={style.wrapperItem}>
          <Text style={style.total}>Totala</Text>
          <Text style={style.totals}>Rp 22,000</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    padding: 20,
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFF",
  },

  title: {
    fontFamily: "segoe-bold",
    fontSize: 25,
    marginBottom: 40,
  },
  titles: {
    fontFamily: "segoe-bold",
    fontSize: 15,
    marginBottom: 40,
  },

  wrapperDetail: {
    height: 120,
    width: "100%",
    backgroundColor: "#727272",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  wrapperNotes: {
    marginLeft: "auto",
    marginTop: -15,
  },

  statusPemesanan: {
    fontSize: 15,
    color: "#FFF",
    fontFamily: "segoe-bold",
  },

  idPemesanan: {
    fontSize: 13,
    color: "#FFF",
    fontFamily: "segoe-ui",
    marginTop: 10,
    marginBottom: 10,
  },

  status: {
    color: "#FD2963",
    fontSize: 12,
    fontFamily: "segoe-semi-bold",
  },

  wrapperItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F3F3F3",
    padding: 10,
    marginBottom: 10,
  },

  total: {
    fontFamily: "segoe-bold",
  },

  totals: {
    fontFamily: "segoe-bold",
    color: "#499756",
  },
});
