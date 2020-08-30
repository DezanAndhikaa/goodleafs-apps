import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HomeNav from "../../../assets/img/Navigation/drawable-hdpi/home.png";
import DiskonNav from "../../../assets/img/Navigation/drawable-hdpi/diskon.png";
import AkunNav from "../../../assets/img/Navigation/drawable-hdpi/akun.png";
import WishlistNav from "../../../assets/img/Navigation/drawable-hdpi/wishlist.png";
import { TouchableOpacity } from "react-native-gesture-handler";

export default Navbar = ({ navigation } = props) => {
  return (
    <View style={style.wrapperNavbar}>
      <TouchableOpacity onPress={() => navigation.navigate("MainMenu")}>
        <Image source={HomeNav} style={style.imageDiskon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Discount")}>
        <Image source={DiskonNav} style={style.imageDiskon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Wishlist")}>
        <Image source={WishlistNav} style={style.image} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Account", {
            namaAccount: "Dezan Andhika",
          })
        }>
        <Image source={AkunNav} style={style.image} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  wrapperNavbar: {
    height: 65,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: "auto",
    backgroundColor: "#CCCCCC",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  image: {
    resizeMode: "contain",
    width: 40,
    height: 40,
    marginTop: 5,
  },

  imageDiskon: {
    resizeMode: "contain",
    width: 65,
    height: 65,
    marginTop: -7,
  },
});
