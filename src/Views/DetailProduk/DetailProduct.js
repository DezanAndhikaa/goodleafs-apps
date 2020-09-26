import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ToastAndroid } from "react-native";
import BackLogo from "../../../assets/img/products/iconBack.png";
import Bookmark from "../../../assets/img/products/bookmark.png";
import Bookmarked from "../../../assets/img/bookmarked.png";
import Star from "../../../assets/img/products/star.png";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import ProductCard from "../../Components/ProductCard/ProductCard";
var NumberFormat = require("react-number-format");
import * as SQLite from "expo-sqlite";
import Axios from "axios";
import { Animated } from "react-native";

const db = SQLite.openDatabase("dev6.db");

const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

export default class DetailProduct extends Component {
  constructor(props) {
    super(props);
    this.scroll = null;
    this.state = {
      qty: 1,
      isBookmarked: false,
      visibleToast: false,
      toastMessage: "",
      dataList: [],
    };
  }

  addQty = () => {
    this.setState({
      qty: this.state.qty + 1,
    });
  };

  decQty = () => {
    if (this.state.qty > 1) {
      this.setState({
        qty: this.state.qty - 1,
      });
    }
  };

  addBookmark = () => {
    if (this.state.isBookmarked) {
      db.transaction((tx) => {
        tx.executeSql(
          "delete from bookmark where idProduct=?",
          [this.props.navigation.getParam("idProduct")],
          (err, { rows }) => {
            this.setState({
              isBookmarked: false,
              visibleToast: true,
              toastMessage: "Product dihapus dari wishlist",
            });
          },
          (_, error) => {}
        );
      });
    } else {
      db.transaction((tx) => {
        tx.executeSql(
          "insert into bookmark values(?)",
          [this.props.navigation.getParam("idProduct")],
          (err, { rows }) => {
            this.checkBookmark();
            this.setState({
              visibleToast: true,
              toastMessage: "Product ditambahkan di wishlist",
            });
          },
          (_, error) => {}
        );
      });
    }
  };

  checkBookmark = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from bookmark where idProduct=?",
        [this.props.navigation.getParam("idProduct")],
        (_, { rows }) => {
          if (rows.length > 0) {
            this.setState({
              isBookmarked: true,
            });
          }
        }
      );
    });
  };

  loadData = async () => {
    const namaCategory = this.props.navigation.getParam("productCategory");
    let data = await Axios.get(
      `https://3a78a3e1bf39.ngrok.io/api/Client/category/s?CategoryName=${namaCategory}`
    );

    this.setState({
      dataList: data.data,
    });
  };

  componentDidUpdate() {
    this.scroll.scrollTo({ x: 0, y: 0, animated: true });
  }

  componentDidMount() {
    this.checkBookmark();

    this.loadData();

    db.transaction((tx) => {
      tx.executeSql("create table if not exists bookmark (idProduct text)");
      tx.executeSql(
        "create table if not exists cart (idProduct text, imageUrl text, qty int, cost int, baseColor text, productName text)"
      );
      tx.executeSql(
        "select * from cart",
        [],
        (_, { rows }) => {},
        (_, err) => {}
      );
    });
  }

  renderData = () => {
    if (this.state.dataList.length != 0) {
      return this.state.dataList.map((data, index) => {
        if (data.ProductName != this.props.navigation.getParam("productName"))
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
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
                });
              }}>
              <ProductCard
                color={data.BaseColor}
                nameProduct={data.ProductName}
                prices={data.Cost}
                image={{
                  uri: `https://3a78a3e1bf39.ngrok.io/Resources/Products/${data.ImageUrl}`,
                }}
              />
            </TouchableOpacity>
          );
      });
    }
  };

  addToCart = () => {
    let totalData = 0;

    db.transaction((tx) => {
      tx.executeSql(
        "select * from cart where idProduct=?",
        [this.props.navigation.getParam("idProduct")],
        (_, { rows }) => {
          if (rows.length > 0) {
            this.setState({
              toastMessage: "Produk sudah ditambahkan di cart!",
              visibleToast: true,
            });
          } else {
            db.transaction((tx) => {
              tx.executeSql(
                "insert into cart values(?,?,?,?,?,?)",
                [
                  this.props.navigation.getParam("idProduct"),
                  this.props.navigation.getParam("image").uri,
                  this.state.qty,
                  this.props.navigation.getParam("price"),
                  this.props.navigation.getParam("baseColor"),
                  this.props.navigation.getParam("productName"),
                ],
                () => {
                  this.props.navigation.navigate("Cart");
                },
                (_, err) => {}
              );
            });
          }
        },
        (_, err) => {}
      );
    });
  };

  render() {
    return (
      <View style={style.wrapper}>
        <ScrollView
          ref={(c) => {
            this.scroll = c;
          }}>
          <View
            style={[
              style.wrapperPhoto,
              { backgroundColor: this.props.navigation.getParam("baseColor") },
            ]}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => this.props.navigation.goBack()}>
              <Image source={BackLogo} />
              <Text style={style.backTextStyle}>Kembali</Text>
            </TouchableOpacity>

            <View style={style.wrapperImage}>
              <Image
                source={this.props.navigation.getParam("image")}
                style={style.imageStyle}
              />
            </View>
          </View>
          <Toast
            visible={this.state.visibleToast}
            message={this.state.toastMessage}
          />

          <View style={style.wrapperProductDetail}>
            <Text style={style.productName}>
              {this.props.navigation.getParam("productName")}
            </Text>
            <TouchableOpacity
              style={style.bookmarkStyle}
              onPress={() => {
                this.addBookmark();
              }}>
              <Image
                source={this.state.isBookmarked ? Bookmarked : Bookmark}
                style={style.bookmarkImage}
              />
            </TouchableOpacity>
            <Image source={Star} style={style.ratingImage} />

            <View style={style.wrapperDescription}>
              <Text style={style.satuanWord}>1 Kilogram</Text>
              <Text>{this.props.navigation.getParam("description")}</Text>
            </View>

            <View style={style.quantityItem}>
              <Text style={style.incrementButton} onPress={this.decQty}>
                -
              </Text>
              <Text style={style.totalQty}>{this.state.qty}</Text>
              <Text style={style.decrementButton} onPress={this.addQty}>
                +
              </Text>

              <View style={style.productPrice}>
                <NumberFormat
                  value={this.props.navigation.getParam("price")}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp "}
                  renderText={(value) => (
                    <Text style={style.priceWord}>{value}</Text>
                  )}
                />
              </View>
            </View>

            <TouchableOpacity
              style={style.pesanProdukButton}
              onPress={() => this.addToCart()}>
              <Text style={style.wordPesanProduk}>Pesan Produk</Text>
            </TouchableOpacity>
          </View>

          <View style={style.wrapperReview}>
            <View style={style.wrapperReviewTitle}>
              <Text style={style.ulasanTitle}>Ulasan Tentang Product</Text>
              <Text
                style={style.lihatSemuaTitle}
                onPress={() =>
                  this.props.navigation.navigate("Reviews", {
                    namaProduct: "Jeruk Manis",
                  })
                }>
                Lihat Semua
              </Text>
            </View>

            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </View>
          <View
            style={{
              paddingLeft: 40,
              paddingRight: 40,
              paddingTop: -10,
            }}>
            <View style={style.wrapperReviewTitle}>
              <Text style={style.ulasanTitle}>Rekomendasi Produk</Text>
              <Text style={style.lihatSemuaTitle}>Lihat Semua</Text>
            </View>
            <ScrollView horizontal={true}>
              <View style={style.wrapperRecomendation}>
                {this.renderData()}
              </View>
            </ScrollView>
          </View>

          <ScrollView horizontal={true}>
            <View style={style.wrapperRecomendation}></View>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  wrapperPhoto: {
    height: 500,
    width: "100%",
    padding: 20,
  },

  imageStyle: {
    width: 270,
    height: 270,
    resizeMode: "contain",
    backgroundColor: "#FFF",
    alignSelf: "center",
  },

  backTextStyle: {
    color: "#FFF",
    fontFamily: "segoe-bold",
    fontSize: 17,
  },

  wrapperProductDetail: {
    zIndex: 10,
    backgroundColor: "#FFF",
    height: 420,
    marginTop: -100,
    borderTopLeftRadius: 80,
    padding: 50,
  },

  productName: {
    color: "#4E4E4E",
    fontSize: 20,
    fontFamily: "segoe-bold",
  },

  bookmarkStyle: {
    backgroundColor: "#4E4E4E",
    width: 55,
    padding: 20,
    borderRadius: 45,
    alignSelf: "flex-end",
    marginTop: -15,
  },

  bookmarkImage: {
    width: 20,
    resizeMode: "contain",
    height: 20,
    alignSelf: "center",
  },

  ratingImage: {
    marginTop: -35,
    resizeMode: "contain",
    width: 105,
  },

  wrapperDescription: {
    marginTop: 15,
  },

  satuanWord: {
    marginBottom: 10,
    fontFamily: "segoe-semi-bold",
  },

  quantityItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
  },

  incrementButton: {
    padding: 9,
    marginTop: 10,
    width: 35,
    fontSize: 20,
    textAlign: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#FFF",
    fontFamily: "segoe-bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  decrementButton: {
    padding: 9,
    marginTop: 10,
    width: 35,
    fontSize: 20,
    textAlign: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#FFF",
    fontFamily: "segoe-bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  totalQty: {
    padding: 9,
    marginTop: 12,
    width: 45,
    fontSize: 14,
    textAlign: "center",
    backgroundColor: "#D4F5D2",
    fontFamily: "segoe-bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  productPrice: {
    flexDirection: "column-reverse",
    flex: 1,
    alignSelf: "center",
  },

  priceWord: {
    alignSelf: "flex-end",
    fontSize: 16,
    marginTop: 15,
    fontFamily: "segoe-bold",
  },

  pesanProdukButton: {
    width: "auto",
    height: 50,
    backgroundColor: "#03AC0E",
    marginTop: 60,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
  },

  wordPesanProduk: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "segoe-bold",
    textAlign: "center",
  },

  wrapperReview: {
    padding: 40,
    flex: 1,
    flexDirection: "column",
  },

  wrapperReviewTitle: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 20,
  },

  ulasanTitle: {
    fontSize: 13,
    fontFamily: "segoe-bold",
    color: "#747474",
  },

  lihatSemuaTitle: {
    fontSize: 13,
    fontFamily: "segoe-semi-bold",
    color: "#747474",
    marginTop: -5,
  },

  wrapperRecomendation: {
    flexDirection: "row",
    paddingLeft: 10,
    marginBottom: 30,
  },

  wrapperImage: {
    backgroundColor: "#FFF",
    height: 305,
    width: "95%",
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 20,
    justifyContent: "center",
  },
});
