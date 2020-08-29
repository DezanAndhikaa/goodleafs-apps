import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import BackLogo from "../../../assets/img/products/iconBack.png";
import Bookmark from "../../../assets/img/products/bookmark.png";
import Star from "../../../assets/img/products/star.png";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import ProductCard from "../../Components/ProductCard/ProductCard";

export default class DetailProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
    };
  }

  render() {
    return (
      <View style={style.wrapper}>
        <ScrollView>
          <View style={style.wrapperPhoto}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => this.props.navigation.goBack()}>
              <Image source={BackLogo} />
              <Text style={style.backTextStyle}>Kembali</Text>
            </TouchableOpacity>
            <Image
              source={this.props.navigation.getParam("image")}
              style={style.imageStyle}
            />
          </View>

          <View style={style.wrapperProductDetail}>
            <Text style={style.productName}>Jeruk Manis</Text>
            <View style={style.bookmarkStyle}>
              <Image source={Bookmark} style={style.bookmarkImage} />
            </View>
            <Image source={Star} style={style.ratingImage} />

            <View style={style.wrapperDescription}>
              <Text style={style.satuanWord}>1 Kilogram</Text>
              <Text>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Text>
            </View>

            <View style={style.quantityItem}>
              <Text style={style.incrementButton}>+</Text>
              <Text style={style.totalQty}>{this.state.qty}</Text>
              <Text style={style.decrementButton}>-</Text>

              <View style={style.productPrice}>
                <Text style={style.priceWord}>Rp 5,000</Text>
              </View>
            </View>

            <TouchableOpacity style={style.pesanProdukButton}>
              <Text style={style.wordPesanProduk}>Pesan Produk</Text>
            </TouchableOpacity>
          </View>

          <View style={style.wrapperReview}>
            <View style={style.wrapperReviewTitle}>
              <Text style={style.ulasanTitle}>Ulasan Tentang Product</Text>
              <Text style={style.lihatSemuaTitle}>Lihat Semua</Text>
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
          </View>

          <ScrollView horizontal={true}>
            <View style={style.wrapperRecomendation}>
              <ProductCard
                color="#FFBF2E"
                nameProduct="Mangga Manis"
                prices="4000"
                image={this.props.navigation.getParam("image")}
              />

              <ProductCard
                color="#869428"
                nameProduct="Apel Mantap Jiwa"
                prices="4000"
                image={this.props.navigation.getParam("image")}
              />

              <ProductCard
                color="#FFBF2E"
                nameProduct="Mangga Manis"
                prices="4000"
                image={this.props.navigation.getParam("image")}
              />

              <ProductCard
                color="#869428"
                nameProduct="Apel Mantap Jiwa"
                prices="4000"
                image={this.props.navigation.getParam("image")}
              />

              <ProductCard
                color="#FFBF2E"
                nameProduct="Mangga Manis"
                prices="4000"
                image={this.props.navigation.getParam("image")}
              />

              <ProductCard
                color="#869428"
                nameProduct="Apel Mantap Jiwa"
                prices="4000"
                image={this.props.navigation.getParam("image")}
              />
            </View>
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
    backgroundColor: "#FFBF2E",
    padding: 20,
  },

  imageStyle: {
    width: 350,
    height: 350,
    resizeMode: "contain",
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
    paddingLeft: 30,
    marginBottom: 30,
  },
});
