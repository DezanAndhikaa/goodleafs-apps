import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Avatar from "../../../assets/img/products/ava.png";
import Rating from "../../../assets/img/products/star.png";

export default ReviewCard = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 40,
      }}>
      <Image source={Avatar} style={style.avatarStyle} />

      <View style={style.wrapperReview}>
        <Text style={style.nameStyle}>John Doe</Text>
        <Image source={Rating} style={style.rating} />
        <Text numberOfLines={2} style={style.reviewStyle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  avatarStyle: {
    borderRadius: 50,
    width: 45,
    height: 45,
    marginRight: 15,
    alignSelf: "center",
  },

  wrapperReview: {
    flexDirection: "column",
  },

  nameStyle: {
    fontSize: 13,
    fontFamily: "segoe-semi-bold",
  },

  reviewStyle: {
    fontSize: 13,
    fontFamily: "segoe-ui",
    paddingRight: 85,
    marginTop: 5,
  },

  rating: {
    width: 70,
    height: 30,
    resizeMode: "contain",
  },
});
