import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Headers from "../../Components/Header/Header";

export default class ListOrders extends Component {
  render() {
    return (
      <View style={style.body}>
        <View style={style.headerWrapper}>
          <Headers />
          <Text style={style.title}>
            Status {"\n"}
            Pemesanan
          </Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
  },

  headerWrapper: {
    padding: 20,
  },

  title: {
    fontFamily: "segoe-bold",
    fontSize: 25,
    marginBottom: 40,
  },
});
