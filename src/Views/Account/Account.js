import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Headers from "../../Components/Header/Header";
import Avatar from "../../../assets/img/default-avatar.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import Navbar from "../../Components/Navbar/Navbar";
import VerifiedLogo from "../../../assets/img/cross.png";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("dev6.db");

export default class Account extends Component {
  state = {
    name: "",
    email: "",
  };

  componentDidMount() {
    db.transaction((tx) => {
      tx.executeSql("create table if not exists user (email text, name text)");
      tx.executeSql("create table if not exists bookmark (idProduct text)");
      tx.executeSql(
        "select * from user",
        [],
        (_, { rows }) => {
          if (rows.length > 0) {
            const data = rows._array;
            this.setState({
              name: data[0].name,
              email: data[0].email,
            });
          } else {
            this.props.navigation.replace("SignIn", {
              data: this.state.dataList,
            });
          }
        },
        (_) => {
          this.props.navigation.navigate("Login");
        }
      );
    });
  }

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
            {this.state.name}
          </Text>

          <View style={style.wrapperPhoto}>
            <Image source={Avatar} style={style.image} />

            <View style={style.accountDetailWrapper}>
              <Text style={style.namaAkun}>{this.state.name}</Text>

              <Text style={style.emailAkun}>{this.state.email}</Text>
            </View>
          </View>

          <View style={style.wrapperButtonUbahProfile}>
            <TouchableOpacity style={style.buttonUbahProfile}>
              <Text style={style.wordUbahProfile}>Ubah Profile</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ListOrders")}
            style={{
              height: 150,
              marginBottom: -50,
            }}>
            <View style={style.wrapperStatus}>
              <View style={style.styleBox2}>
                <Text style={style.qty}>0</Text>
                <Text style={style.qtyOrder}>Pesanan Diproses</Text>
              </View>
              <View style={style.styleBox3}>
                <Text style={style.qty}>0</Text>
                <Text style={style.qtyOrder}>Pesanan Dikirim</Text>
              </View>
              <View style={style.styleBox}>
                <Text style={style.qty}>0</Text>
                <Text style={style.qtyOrder}>Pesanan Diterima</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={style.verifiedAccount}>
            <Image source={VerifiedLogo} />
            <Text style={style.verifWord}>Akun anda belum terverifikasi!</Text>
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
    marginLeft: 10,
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
    backgroundColor: "#CE5C5C",
    marginTop: 100,
  },

  verifWord: {
    color: "#FFF",
    marginLeft: 20,
    fontFamily: "segoe-semi-bold",
    fontSize: 14,
  },
});
