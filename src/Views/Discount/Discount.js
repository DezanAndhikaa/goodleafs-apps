import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Headers from "../../Components/Header/Header";

export default class Discount extends Component {
  render() {
    return (
      <View style={style.body}>
        <ScrollView>
          <Headers />
          <Text style={style.title}>Daftar Promo{"\n"}Goodleafs</Text>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    padding: 25,
    backgroundColor: "#FFF",
    flex: 1,
  },

  title: {
    fontFamily: "segoe-bold",
    fontSize: 24,
    marginBottom: 15,
  },
});
