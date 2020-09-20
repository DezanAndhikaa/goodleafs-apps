import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ProductCardImage from "../ProductCard/ProductCardImage";
var NumberFormat = require("react-number-format");
import Delete from "../../../assets/img/delete.png";
import { TouchableOpacity } from "react-native-gesture-handler";

export default CartCard = ({
  image,
  namaProduct,
  qty,
  prices,
  color,
  deleteFunction,
} = props) => {
  const [totalqty, setQty] = useState(qty);

  return (
    <View style={style.wrapperBody}>
      <View style={style.productWrapper}>
        <ProductCardImage color={color} image={image} />
      </View>

      <View style={style.wrapperDetail}>
        <Text>{namaProduct}</Text>
        <View style={style.quantityItem}>
          <Text
            style={style.incrementButton}
            onPress={() => {
              setQty(totalqty - 1);
            }}>
            -
          </Text>
          <Text style={style.totalQty}>{totalqty}</Text>
          <Text
            style={style.decrementButton}
            onPress={() => {
              if (totalqty > 1) {
                setQty(totalqty + 1);
              }
            }}>
            +
          </Text>
          <View
            style={{
              marginLeft: "auto",
            }}>
            <TouchableOpacity onPress={deleteFunction}>
              <Image source={Delete} />
            </TouchableOpacity>
          </View>
        </View>

        <NumberFormat
          value={prices}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rp "}
          renderText={(value) => (
            <Text style={style.productPrices}>{value}</Text>
          )}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrapperBody: {
    flexDirection: "row",
    height: 150,
    backgroundColor: "#F3F3F3",
    padding: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 10,
    marginBottom: 20,
  },

  productWrapper: {
    flex: 1.5,
  },

  wrapperDetail: {
    flex: 2,
    flexDirection: "column",
  },

  incrementButton: {
    padding: 5,
    height: 35,
    marginTop: 10,
    width: 25,
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
    padding: 5,
    height: 35,
    marginTop: 10,
    width: 25,
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
    padding: 6,
    height: 35,
    marginTop: 10,
    width: 35,
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

  productPrices: {
    marginTop: 10,
  },

  quantityItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 8,
    marginLeft: -5,
  },
});
