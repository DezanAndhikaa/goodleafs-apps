import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Headers from "../../Components/Header/Header";
import Lists from "../../Components/List/Lists";

export default class Discount extends Component {
  render() {
    return (
      <View style={style.body}>
        <ScrollView>
          <Headers navigation={this.props.navigation} />
          <Text style={style.title}>Daftar Promo{"\n"}Goodleafs</Text>
          <View style={style.listWrapper}>
            <Lists
              periode="23-08-2020"
              namaDiskon="Diskon Hari Kemerdekaan!"
              detailDiskon="Diskon murah banget ini guys ayoo buruan digunakan diskonnya!"
            />
            <Lists
              periode="23-08-2020"
              namaDiskon="Diskon Hari Kemerdekaan!"
              detailDiskon="Diskon murah banget ini guys ayoo buruan digunakan diskonnya!"
            />
            <Lists
              periode="23-08-2020"
              namaDiskon="Diskon Hari Kemerdekaan!"
              detailDiskon="Diskon murah banget ini guys ayoo buruan digunakan diskonnya!"
            />
            <Lists
              periode="23-08-2020"
              namaDiskon="Diskon Hari Kemerdekaan!"
              detailDiskon="Diskon murah banget ini guys ayoo buruan digunakan diskonnya!"
            />
            <Lists
              periode="23-08-2020"
              namaDiskon="Diskon Hari Kemerdekaan!"
              detailDiskon="Diskon murah banget ini guys ayoo buruan digunakan diskonnya!"
            />
          </View>
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

  listWrapper: {
    marginTop: 12,
    justifyContent: "space-between",
  },
});
