import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Headers from "../../Components/Header/Header";
import Avatar from "../../../assets/img/default-avatar.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import Navbar from "../../Components/Navbar/Navbar";
import VerifiedLogo from "../../../assets/img/verified.png";

export default class Account extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View style={style.body}>
          <Headers navigation={this.props.navigation} />
          <Text style={style.title}>
            Hallo, {"\n"}
            {this.props.navigation.getParam("namaAccount")}
          </Text>

          <View style={style.wrapperPhoto}>
            <Image source={Avatar} style={style.image} />

            <View style={style.accountDetailWrapper}>
              <Text style={style.namaAkun}>
                {this.props.navigation.getParam("namaAccount")}
              </Text>

              <Text style={style.emailAkun}>dezanandhika@outlook.com</Text>
            </View>
          </View>

          <View style={style.wrapperButtonUbahProfile}>
            <TouchableOpacity style={style.buttonUbahProfile}>
              <Text style={style.wordUbahProfile}>Ubah Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={style.wrapperStatus}>
            <View style={style.styleBox}>
              <Text style={style.qty}>42</Text>
              <Text style={style.qtyOrder}>Pesanan Diterima</Text>
            </View>
            <View style={style.styleBox2}>
              <Text style={style.qty}>12</Text>
              <Text style={style.qtyOrder}>Pesanan Diproses</Text>
            </View>
            <View style={style.styleBox3}>
              <Text style={style.qty}>2</Text>
              <Text style={style.qtyOrder}>Pesanan Dikirim</Text>
            </View>
          </View>

          <View style={style.verifiedAccount}>
            <Image source={VerifiedLogo} />
            <Text style={style.verifWord}>Akun anda sudah terverifikasi!</Text>
          </View>
        </View>
        <Navbar navigation={this.props.navigation} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  qtyOrder: {
    fontSize: 11,
    fontFamily: "segoe-semi-bold",
    color: "#FFF",
  },

  qty: {
    fontSize: 14,
    fontFamily: "segoe-semi-bold",
    color: "#FFF",
  },

  styleBox: {
    flex: 1,
    height: 70,
    backgroundColor: "#7FCB69",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  styleBox2: {
    flex: 1,
    height: 70,
    backgroundColor: "#6492FD",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  styleBox3: {
    flex: 1,
    height: 70,
    backgroundColor: "#E88234",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  wrapperStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    height: 40,
  },
  accountDetailWrapper: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginLeft: 20,
  },

  title: {
    fontFamily: "segoe-bold",
    fontSize: 25,
    marginBottom: 40,
  },

  body: {
    padding: 25,
    flex: 1,
    backgroundColor: "#FFF",
  },

  wrapperPhoto: {
    flexDirection: "row",
    backgroundColor: "#FFF",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    height: 130,
    padding: 15,
    borderRadius: 20,
  },

  image: {
    resizeMode: "contain",
    borderRadius: 50,
    flex: 1,
    marginTop: -80,
  },

  namaAkun: {
    fontSize: 15,
    fontFamily: "segoe-bold",
  },

  emailAkun: {
    fontSize: 13,
    fontFamily: "segoe-semi-bold",
  },

  wrapperButtonUbahProfile: {
    flexDirection: "row-reverse",
    marginTop: 12,
  },

  buttonUbahProfile: {
    backgroundColor: "#989898",
    height: 40,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    marginTop: 20,
  },

  wordUbahProfile: {
    color: "#FFF",
    fontFamily: "segoe-semi-bold",
    fontSize: 12,
  },

  verifiedAccount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    borderRadius: 15,
    backgroundColor: "#688860",
    marginTop: 100,
  },

  verifWord: {
    color: "#FFF",
    marginLeft: 20,
    fontFamily: "segoe-semi-bold",
    fontSize: 14,
  },
});
