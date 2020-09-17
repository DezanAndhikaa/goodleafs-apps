import React, { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Text,
  Button,
  Image,
} from "react-native";
import HeaderSign from "../../Components/Login/Header";
import Sign from "../../Components/Login/Sign";
import axios from "axios";
import { Keyboard } from "react-native";
import Eclipse from "../../../assets/img/eclipse.gif";

const SendSignUp = (name, email, pass, reconf, navigation, setLoading) => {
  const UserRegister = {
    Name: name,
    Email: email,
    Password: pass,
  };
  if (pass != reconf) {
    alert("password tidak sesuai");
  } else {
    setLoading(true);

    axios
      .post("http://ee974ce4f8f6.ngrok.io/api/Client/register", UserRegister)
      .then((res) => {
        alert("Berhasil mendaftarkan akun!");
        navigation.replace("SignIn");
      })
      .catch((err) => {
        alert("Email sudah terdaftar");
        setLoading(false);
      });
  }
};

const SignUp = ({ navigation } = props) => {
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reconfi, setReconf] = useState("");
  const [loading, setLoading] = useState(false);
  const display = loading ? "flex" : "none";

  return (
    <View style={style.bodys}>
      <StatusBar barStyle="dark-content" />
      <HeaderSign />
      <Sign status="signup" navigation={navigation} />
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginTop: 20,
          display: display,
        }}>
        <Image
          source={Eclipse}
          style={{
            display: "flex",
            alignSelf: "center",
            zIndex: 2000,
            resizeMode: "contain",
            width: 50,
            height: 50,
          }}
        />
        <Text style={{ alignSelf: "center", marginLeft: 20 }}>Loading...</Text>
      </View>
      <View style={style.wrapper}>
        <TextInput
          style={style.textInput}
          placeholder="Nama"
          onChange={(e) => {
            setNameUser(e.nativeEvent.text);
          }}
        />

        <TextInput
          style={style.textInput}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.nativeEvent.text);
          }}
        />

        <TextInput
          style={style.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChange={(e) => {
            setPassword(e.nativeEvent.text);
          }}
        />
        <TextInput
          style={style.textInput}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChange={(e) => {
            setReconf(e.nativeEvent.text);
          }}
        />

        <Button
          title="SIGN UP"
          disabled={loading}
          color="#A8C02B"
          onPress={() =>
            SendSignUp(
              nameUser,
              email,
              password,
              reconfi,
              navigation,
              setLoading
            )
          }
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

export default SignUp;
