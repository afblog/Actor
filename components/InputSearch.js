import { View, TextInput, StyleSheet, I18nManager } from "react-native";
import React from "react";

import SearchIcon from "../assets/images/icons/SearchIcon";

export default function SearchInput({ placeholder }) {
  return (
    <View style={styles.search}>
      <SearchIcon />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#697480"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    marginTop: 30,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 45,
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
    backgroundColor: "rgba(255, 255, 255, .2)",
  },

  searchInput: {
    textAlign: I18nManager.isRTL? "right" : "",
    width: "90%",
    height: "100%",
    fontFamily: "Dana-Regular",
    color: "#ABB7C4",
  },
});
