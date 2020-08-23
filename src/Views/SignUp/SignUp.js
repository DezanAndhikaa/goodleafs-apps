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

const SignUp = ({ navigation } = props) => {
  return (
    <View style={style.bodys}>
      <StatusBar barStyle="dark-content" />
      <HeaderSign />
      <Sign status="signup" navigation={navigation} />

      <View style={style.wrapper}>
        <TextInput style={style.textInput} placeholder="Nama" />
        <TextInput style={style.textInput} placeholder="Email" />
        <TextInput
          style={style.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={style.textInput}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />

        <Button title="SIGN UP" color="#A8C02B" />
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

export default SignUp;
