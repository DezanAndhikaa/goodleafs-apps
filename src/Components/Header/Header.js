import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import NavBack from "../../../assets/img/products/BackArrowBlack.png";

export default Headers = ({ navigation } = props) => {
  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: "row", marginBottom: 24 }}
        onPress={() => navigation.goBack()}>
        <Image
          source={NavBack}
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
    </View>
  );
};

const style = StyleSheet.create({
  backTextStyle: {
    fontFamily: "segoe-bold",
    fontSize: 17,
  },
});
