import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Text,
  Button,
} from "react-native";
import HeaderSign from "../../Components/Login/Header";
import Sign from "../../Components/Login/Sign";
import FbButton from "../../Components/Login/FacebookButton";

const LoginProcess = () => {
  navigation.dispatch((state) => {
    // Remove the home route from the stack
    const routes = state.routes.filter((r) => r.name !== "Loading");

    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1,
    });
  });
};

const Login = ({ navigation } = props) => {
  return (
    <View style={style.bodys}>
      <StatusBar barStyle="dark-content" />
      <HeaderSign />
      <Sign status="signin" navigation={navigation} />
      <View style={style.fbButton}>
        <FbButton />
      </View>
      <View style={style.orComponent}>
        <View
          style={{
            backgroundColor: "#767676",
            height: 1,
            width: "100%",
            marginTop: 20,
            marginBottom: 20,
          }}
        />
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 10,
          }}
        />
      </View>
      <View style={style.wrapper}>
        <TextInput style={style.textInput} placeholder="Email" />
        <TextInput
          style={style.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />

        <Button
          title="SIGN IN"
          color="#A8C02B"
          onPress={() => {
            navigation.replace("MainMenu");
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  bodys: {
    paddingTop: StatusBar.currentHeight + 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#FFF",
    flex: 1,
  },
  textInput: {
    paddingHorizontal: 10,
    height: 46,
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  wrapper: {
    flexDirection: "column",
    flex: 1,
    marginTop: 20,
  },
  fbButton: {
    marginTop: 50,
  },
  orComponent: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: "#A8C02B",
  },
});

export default Login;
