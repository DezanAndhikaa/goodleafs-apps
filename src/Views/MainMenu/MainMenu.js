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
import Buah from "../../../assets/img/buah.jpg";
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
    dataDeal: [],
    dataCategory: [],
    etalaseList: [],
  };

  renderProduct = () => {
    return this.state.dataDeal.map((data, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() =>
            this.props.navigation.navigate("DetailProduct", {
              image: {
                uri: `http://fd51fe99a1a1.ngrok.io/Resources/Products/${data.ImageUrl}`,
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
              uri: `http://fd51fe99a1a1.ngrok.io/Resources/Products/${data.ImageUrl}`,
            }}
            nameProduct={data.ProductName}
            prices={data.Cost}
          />
        </TouchableOpacity>
      );
    });
  };

  renderCategory = () => {
    let indexer = 0;
    return this.state.dataCategory.map((data, index) => {
      if (++indexer % 2 == 0) {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              this.props.navigation.navigate("DetailSearch", {
                namaCategory: data.CategoryName,
                pencarian: "Kategori",
              });
            }}>
            <Kategori
              image={{
                uri: `http://fd51fe99a1a1.ngrok.io/Resources/Category/${data.ImageUrl}`,
              }}
              title={data.CategoryName}
            />
          </TouchableOpacity>
        );
      }
    });
  };

  renderEtalase = () => {
    return this.state.etalaseList.map((data, index) => {
      return (
        <View key={index}>
          <Text style={style.headerWord}> {data.CategoryName} </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={style.containerProduct}>
              {data.Products.map((data, index) => {
                return (
                  <View key={index}>
                    <ProductCard
                      color={data.BaseColor}
                      image={{
                        uri: `http://fd51fe99a1a1.ngrok.io/Resources/Products/${data.ImageUrl}`,
                      }}
                      nameProduct={data.ProductName}
                      prices={data.Cost}
                    />
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      );
    });
  };
  renderCategorySecond = () => {
    let indexer = 0;
    return this.state.dataCategory.map((data, index) => {
      if (++indexer % 2 == 1) {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              this.props.navigation.navigate("DetailSearch", {
                namaCategory: data.CategoryName,
                pencarian: "Kategori",
              });
            }}>
            <Kategori
              image={{
                uri: `http://fd51fe99a1a1.ngrok.io/Resources/Category/${data.ImageUrl}`,
              }}
              title={data.CategoryName}
            />
          </TouchableOpacity>
        );
      }
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

    this.setState({
      dataDeal: this.props.navigation.getParam("data").DealoftheDay,
      dataCategory: this.props.navigation.getParam("data").Category,
      etalaseList: this.props.navigation.getParam("data").EtalaseList,
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
              <View style={{ flexDirection: "column" }}>
                <View style={style.containerKategori}>
                  {this.renderCategorySecond()}
                </View>

                <View style={style.containerKategoriTwo}>
                  {this.renderCategory()}
                </View>
              </View>
            </ScrollView>

            {this.renderEtalase()}
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
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 10,
    backgroundColor: "#FFF",
    paddingBottom: 5,
  },

  containerKategoriTwo: {
    flexDirection: "row",
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
