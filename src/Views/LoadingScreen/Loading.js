import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image } from "react-native";
import LogoGoodleafs from "../../../assets/img/logos.png";
import LoadingBar from "../../../assets/img/pulse.gif";
import * as Font from "expo-font";

export class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
    };
  }

  componentDidMount() {
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
      () => setTimeout(() => this.props.navigation.replace("SignIn"), 3000)
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
