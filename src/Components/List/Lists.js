import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Lists = (props) => {
  return (
    <View style={style.body}>
      <View style={style.marker}>
        <Text style={style.markerWord}>
          Periode
          {"\n" + props.periode}
        </Text>
      </View>
      <View style={style.content}>
        <Text numberOfLines={1} style={style.namaDiskon}>
          {props.namaDiskon}
        </Text>
        <Text numberOfLines={2} style={style.detailDiskon}>
          {props.detailDiskon}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 15,
  },

  markerWord: {
    textAlign: "center",
    color: "#FFF",
    fontFamily: "segoe-semi-bold",
    fontSize: 14,
  },

  marker: {
    backgroundColor: "#7FCB69",
    flex: 1.25,
    height: 85,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  discountTitle: {
    fontSize: 18,
    fontFamily: "segoe-semi-bold",
  },

  content: {
    backgroundColor: "#E6E6E6",
    padding: 10,
    flex: 3,
    height: 85,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
  },

  namaDiskon: {
    fontSize: 15,
    fontFamily: "segoe-semi-bold",
  },

  detailDiskon: {
    fontFamily: "segoe-ui",
    marginTop: 2,
    fontSize: 13,
  },
});
