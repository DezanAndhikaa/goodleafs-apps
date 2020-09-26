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
import FbButton from "../../Components/Login/FacebookButton";
import Axios from "axios";
import Eclipse from "../../../assets/img/eclipse.gif";
import * as Facebook from "expo-facebook";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("dev6.db");

const Login = ({ navigation } = props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const display = loading ? "flex" : "none";

  const sendAxios = () => {
    setLoading(true);
    const payload = {
      Email: email,
      Password: password,
    };
    Axios.post("https://3a78a3e1bf39.ngrok.io/api/Client/login", payload)
      .then((e) => {
        db.transaction((tx) => {
          tx.executeSql("insert into user values(?,?)", [email, e.data]);
        });
        navigation.replace("LoadingScreen");
      })
      .catch(() => {
        alert("Username / password salah");
        setLoading(false);
      });
  };

  const logInFb = async () => {
    console.log("Fb pressed");
    try {
      await Facebook.initializeAsync("361620694995733");
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,email,birthday&access_token=${token}`
        );
        const res = await response.json();
        db.transaction((tx) => {
          tx.executeSql("insert into user values(?,?)", [res.email, res.name]);
        });
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <View style={style.bodys}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <HeaderSign />
      <Sign status="signin" navigation={navigation} />

      <TouchableOpacity
        style={style.fbButton}
        onPress={() => {
          logInFb();
        }}>
        <FbButton />
      </TouchableOpacity>

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

        <Button
          title="SIGN IN"
          color="#A8C02B"
          disabled={loading}
          onPress={() => {
            sendAxios();
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
