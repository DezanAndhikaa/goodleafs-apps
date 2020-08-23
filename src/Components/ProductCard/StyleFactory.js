import React from "react";
import { StyleSheet } from "react-native";

export default class StyleSheetFactory {
  static getSheet(color) {
    return StyleSheet.create({
      height: 191,
      width: 147,
      backgroundColor: color,
      borderRadius: 12,
    });
  }
}
