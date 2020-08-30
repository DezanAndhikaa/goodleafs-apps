import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Headers from "../../Components/Header/Header";
import ListOrderCard from "../../Components/CartCard/ListOrderCard";
import Jeruk from "../../../assets/img/products/Jeruks.png";
import Apel from "../../../assets/img/products/Apel.png";
import { ScrollView } from "react-native-gesture-handler";

export default class ListOrders extends Component {
  render() {
    return (
      <View style={style.body}>
        <View style={style.headerWrapper}>
          <Headers navigation={this.props.navigation} />
          <Text style={style.title}>
            Status{"\n"}
            Pemesanan
          </Text>
        </View>

        <ScrollView>
          <ListOrderCard
            image={Apel}
            color="#869428"
            title="Apel Medan"
            id="23212324"
            status="Menunggu Pembayaran"
            navigation={this.props.navigation}
          />
          <ListOrderCard
            image={Apel}
            color="#869428"
            title="Apel Medan"
            id="23212324"
            status="Menunggu Pembayaran"
          />
          <ListOrderCard
            image={Apel}
            color="#869428"
            title="Apel Medan"
            id="23212324"
            status="Menunggu Pembayaran"
          />
          <ListOrderCard
            image={Apel}
            color="#869428"
            title="Apel Medan"
            id="23212324"
            status="Menunggu Pembayaran"
          />
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFF",
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
