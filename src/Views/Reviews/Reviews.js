import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import Headers from "../../Components/Header/Header";

export default class Reviews extends Component {
  render() {
    return (
      <View style={style.body}>
        <Headers navigation={this.props.navigation} />
        <Text style={style.title}>
          Ulasan {"\n"}
          {this.props.navigation.getParam("namaProduct")}
        </Text>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
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
});
