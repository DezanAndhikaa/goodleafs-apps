import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import BackLogo from "../../../assets/img/products/BackArrowBlack.png";

export default class Reviews extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={style.body}>
        <TouchableOpacity
          style={{ flexDirection: "row", marginBottom: 24 }}
          onPress={() => this.props.navigation.goBack()}>
          <Image
            source={BackLogo}
            style={{
              resizeMode: "contain",
              width: 25,
              height: 25,
              marginTop: -2,
              marginLeft: -5,
            }}
          />
          <Text style={style.backTextStyle}>Kembali</Text>
        </TouchableOpacity>

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
