import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import MainBar from "../../Components/MainBar/MainBar";
import Banner from "../../../assets/img/banner.png";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { ScrollView } from "react-native-gesture-handler";
import Jeruk from "../../../assets/img/products/Jeruks.png";
import Apel from "../../../assets/img/products/Apel.png";
import Salad from "../../../assets/img/products/salad.png";
import Kubis from "../../../assets/img/products/Kubis.png";
import Kategori from "../../Components/Kategori/Kategori";
import Navbar from "../../Components/Navbar/Navbar";
import * as SQLite from "expo-sqlite";
import axios from "axios";
import { set } from "react-native-reanimated";

const db = SQLite.openDatabase("local.db");

const WelcomeWord = (words, second) => {
  return (
    <View>
      <Text style={style.welcomeWord}>{words}</Text>
      <Text style={style.welcomeWord}>{second}</Text>
    </View>
  );
};

export default class MainMenu extends Component {
  state = {
    name: "",
    email: "",
    data: [],
  };

  renderProduct = () => {
    return this.state.data.map((data, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() =>
            this.props.navigation.navigate("DetailProduct", {
              image: {
                uri: `http://ee974ce4f8f6.ngrok.io/Resources/Products/${data.ImageUrl}`,
              },
              baseColor: data.BaseColor,
              description: data.Description,
              idProduct: data.IdProduct,
              price: data.Cost,
              productName: data.ProductName,
            })
          }>
          <ProductCard
            color={data.BaseColor}
            image={{
              uri: `http://ee974ce4f8f6.ngrok.io/Resources/Products/${data.ImageUrl}`,
            }}
            nameProduct={data.ProductName}
            prices={data.Cost}
          />
        </TouchableOpacity>
      );
    });
  };

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    db.transaction((tx) => {
      tx.executeSql("select * from user", [], (_, { rows }) => {
        const data = rows._array;
        this.setState({
          name: data[0].name,
          email: data[0].email,
        });
      });
    });
    axios.get("http://ee974ce4f8f6.ngrok.io/api/Product").then((e) => {
      let data = e.data.Data;
      this.setState({ data: data });
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFF" }}>
        <ScrollView style={style.scrollParent}>
          <View>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="#FFF"
              hidden={false}
            />

            <MainBar navigation={this.props.navigation} />
            {WelcomeWord("Buah dan Sayuran Segar", "Setiap Hari")}
            <Image source={Banner} style={style.bannerImage} />
            <Text style={style.headerWord}> Deal of the day! </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={style.containerProduct}>{this.renderProduct()}</View>
            </ScrollView>
            <Text style={style.headerWord}> Kategori </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: "row" }}>
                <View style={style.containerKategori}>
                  <Kategori image={Salad} title="Sayuran Hidroponik" />
                  <Kategori image={Salad} title="Makanan Dingin" />
                </View>

                <View style={style.containerKategori}>
                  <Kategori image={Salad} title="Buah-buahan" />
                  <Kategori image={Salad} title="Sayuran Organik" />
                </View>

                <View style={style.containerKategori}>
                  <Kategori image={Salad} title="Sayuran Hidroponik" />
                  <Kategori image={Salad} title="Sayuran Hidroponik" />
                </View>
              </View>
            </ScrollView>

            <Text style={style.headerWord}> Makanan Dingin </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={style.containerProduct}>
                <ProductCard
                  color="#FFBF2E"
                  image={Jeruk}
                  nameProduct="Jeruk Manis"
                  prices="12000"
                />
                <ProductCard
                  color="#869428"
                  image={Apel}
                  nameProduct="Apel Medan"
                  prices="5000"
                />
                <ProductCard
                  color="#D0DD8D"
                  image={Kubis}
                  nameProduct="Kubis Segar"
                  prices="9000"
                />
              </View>
            </ScrollView>

            <Text style={style.headerWord}> Sayuran Organik </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={style.containerProduct}>
                <ProductCard
                  color="#FFBF2E"
                  image={Jeruk}
                  nameProduct="Jeruk Manis"
                  prices="12000"
                />
                <ProductCard
                  color="#869428"
                  image={Apel}
                  nameProduct="Apel Medan"
                  prices="5000"
                />
                <ProductCard
                  color="#D0DD8D"
                  image={Kubis}
                  nameProduct="Kubis Segar"
                  prices="9000"
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>

        <Navbar
          navigation={this.props.navigation}
          accountName={this.state.name}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  viewStyle: {},

  textStyle: {
    color: "black",
  },

  welcomeWord: {
    fontFamily: "segoe-bold",
    marginBottom: 4,
    fontSize: 20,
  },

  bannerImage: {
    marginTop: 40,
    marginBottom: 40,
  },

  headerWord: {
    fontFamily: "segoe-bold",
    fontSize: 15,
    marginBottom: 15,
  },

  containerProduct: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 10,
    backgroundColor: "#FFF",
    paddingBottom: 30,
  },

  containerKategori: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 10,
    backgroundColor: "#FFF",
    paddingBottom: 30,
  },

  scrollParent: {
    backgroundColor: "#FFF",
    flexDirection: "column",
    paddingLeft: 30,
    paddingBottom: 40,
  },
});
