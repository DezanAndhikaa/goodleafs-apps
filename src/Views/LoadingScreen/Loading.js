import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image } from "react-native";
import LogoGoodleafs from "../../../assets/img/logos.png";
import LoadingBar from "../../../assets/img/pulse.gif";
import * as Font from "expo-font";
import * as SQLite from "expo-sqlite";
import Axios from "axios";

const db = SQLite.openDatabase("dev6.db");

export class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      dataList: [],
    };
  }

  loadDeal = () => {
    Axios.get("https://3a78a3e1bf39.ngrok.io/api/Client/opening").then(
      (data) => {
        this.setState({
          dataList: data.data,
        });
      }
    );
  };

  componentDidMount() {
    this.loadDeal();
    Font.loadAsync({
      "segoe-ui": require("../../../assets/fonts/Segoe-UI.ttf"),
      "segoe-italic": require("../../../assets/fonts/Segoe-UI-Italic.ttf"),
      "segoe-semi-light": require("../../../assets/fonts/Segoe-UI-Semilight.ttf"),
      "segoe-semi-bold": require("../../../assets/fonts/Segoe-UI-Semibold.ttf"),
      "segoe-bold": require("../../../assets/fonts/Segoe-UI-Bold.ttf"),
    });
    this.setState(
      {
        dataLoaded: true,
      },
      () => {
        db.transaction((tx) => {
          tx.executeSql(
            "create table if not exists user (email text, name text)"
          );
          tx.executeSql("create table if not exists bookmark (idProduct text)");
        });

        setTimeout(
          () =>
            this.props.navigation.replace("MainMenu", {
              data: this.state.dataList,
            }),
          3000
        );
      }
    );
  }

  render() {
    return (
      <View style={style.viewStyle}>
        <StatusBar barStyle="light-content" backgroundColor="white" />
        <Image source={LogoGoodleafs} style={style.logoStyle} />
        <Image source={LoadingBar} style={style.loadingBar} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  viewStyle: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },

  logoStyle: {
    width: 200,
    height: 200,
  },
  loadingBar: {
    width: 150,
    height: 50,
    marginTop: 50,
  },
});

// export default LoadingScreen;
export default LoadingScreen;
