import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Headers from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import JerukManis from "../../../assets/img/products/Jeruks.png";
import Axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

const data = [
  {
    color: "orange",
    nameProduct: "Jeruk Manis",
    image: JerukManis,
    prices: "4000",
  },
  {
    color: "orange",
    nameProduct: "Jeruk Orange",
    image: JerukManis,
    prices: "5000",
  },
  {
    color: "orange",
    nameProduct: "Jeruk Balil",
    image: JerukManis,
    prices: "7000",
  },
];

export default class DetailSearch extends Component {
  state = {
    dataList: [],
  };

  loadData = async () => {
    if (this.props.navigation.getParam("pencarian") == "Kategori") {
      const namaProduk = this.props.navigation.getParam("namaCategory");
      let data = await Axios.get(
        `https://3a78a3e1bf39.ngrok.io/api/Client/category/s?CategoryName=${namaProduk}`
      );

      this.setState({
        dataList: data.data,
      });
    } else {
      const namaProduk = this.props.navigation.getParam("keyword");
      let builderCategory = "";
      if (this.props.navigation.getParam("listCategory").length > 0) {
        this.props.navigation.getParam("listCategory").map((data) => {
          builderCategory += `&CategoryName=${data}`;
        });
      } else {
        builderCategory = `&CategoryName=""`;
      }
      let data = await Axios.get(
        `https://0cdf877f1c42.ngrok.io/api/Client/product/all/n?ProductName=${namaProduk}${builderCategory}`
      );

      this.setState({
        dataList: data.data,
      });
    }
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <View style={style.body}>
        <Headers navigation={this.props.navigation} />
        <ScrollView>
          <Text style={style.title}>
            Pencarian{"\n"}
            {this.props.navigation.getParam("pencarian")}
          </Text>
          <View style={style.wrapperBody}>
            {this.state.dataList.map((data, index) => (
              <TouchableOpacity
                style={style.styleItem}
                key={index}
                onPress={() =>
                  this.props.navigation.navigate("DetailProduct", {
                    image: {
                      uri: `https://3a78a3e1bf39.ngrok.io/Resources/Products/${data.ImageUrl}`,
                    },
                    baseColor: data.BaseColor,
                    description: data.Description,
                    idProduct: data.IdProduct,
                    price: data.Cost,
                    productName: data.ProductName,
                    productCategory: data.CategoryName,
                  })
                }>
                <ProductCard
                  color={data.BaseColor}
                  nameProduct={data.ProductName}
                  prices={data.Cost}
                  image={{
                    uri: `https://3a78a3e1bf39.ngrok.io/Resources/Products/${data.ImageUrl}`,
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
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

  wrapperList: {
    flex: 1,
  },

  wrapperCard: {
    height: 200,
  },

  wrapperBody: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: 0,
  },

  styleItem: {
    flexBasis: "50%",
    height: 200,
    marginBottom: 30,
  },
});
