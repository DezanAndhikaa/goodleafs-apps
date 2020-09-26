import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import BubbleCategorys from "../../Components/BubbleCategory/BubbleCategorys";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      namaProduk: "",
      activeButton: false,
      listCategory: [],
    };
  }

  renderListCategory = () => {
    return this.props.navigation.getParam("data").map((data, index) => {
      return (
        <View key={index}>
          <BubbleCategorys
            nama={data.CategoryName}
            pushData={() => {
              var joined = this.state.listCategory.concat(data.CategoryName);
              this.setState({ listCategory: joined });
            }}
            deleteData={() => {
              var array = [...this.state.listCategory];
              var lastData = array.indexOf(data.CategoryName);
              if (lastData !== -1) {
                array.splice(lastData, 1);
                this.setState({ listCategory: array });
              }
            }}
          />
        </View>
      );
    });
  };

  render() {
    return (
      <View style={style.body}>
        <Text style={style.title}> Cari Produk </Text>

        <TextInput
          style={style.textInput}
          onChange={(e) => {
            this.setState({ namaProduk: e.nativeEvent.text });
          }}
          placeholder="Ketik nama produk..."
        />
        <View style={{ flexDirection: "row", flex: 1, flexWrap: "wrap" }}>
          {this.renderListCategory()}
        </View>

        <TouchableOpacity
          style={style.pesanProdukButton}
          onPress={() => {
            this.props.navigation.navigate("DetailSearch", {
              listCategory: this.state.listCategory,
              keyword: this.state.namaProduk,
              pencarian: "Produk",
            });
          }}>
          <Text style={style.wordPesanProduk}>Cari Produk</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    padding: 20,
    flex: 1,
    backgroundColor: "#FFF",
  },
  title: {
    fontFamily: "segoe-bold",
    fontSize: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  textInput: {
    paddingHorizontal: 10,
    height: 46,
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
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

  wrapperBuble: {
    borderColor: "#20232a",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: "baseline",
    marginRight: 10,
    marginBottom: 10,
  },

  wrapperBubleClicked: {
    color: "#FFF",
    backgroundColor: "#20232a",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: "baseline",
    marginRight: 10,
    marginBottom: 10,
  },

  wordPesanProduk: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "segoe-bold",
    textAlign: "center",
  },
});
