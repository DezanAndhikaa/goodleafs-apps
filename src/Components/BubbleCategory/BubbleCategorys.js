import React, { Component, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import useStateWithCallback from "use-state-with-callback";

export default BubbleCategory = ({ pushData, deleteData, nama } = props) => {
  const [isActive, setActive] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setActive(!isActive);
        if (!isActive) {
          pushData();
        } else {
          deleteData();
        }
      }}
      style={isActive ? style.wrapperBubleClicked : style.wrapperBuble}>
      <Text style={isActive ? { color: "#FFF" } : { color: "#20232a" }}>
        {nama}
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
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
});
