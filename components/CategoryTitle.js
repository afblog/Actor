import { View, Text, StyleSheet, I18nManager } from "react-native";
import React from "react";

export default function CategoryTitle({ title, marginTop }) {
  return (
    <View style={[styles.categoryContainer, { marginTop: marginTop }]}>
      <Text style={styles.moreBtn}>بیشتر ...</Text>
      <Text style={styles.categoryItemTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  moreBtn: {
    fontFamily: "Dana-Regular",
    color: "#F6C977",
  },

  categoryItemTitle: {
    fontFamily: "Morabba-Medium",
    fontSize: 18,
    color: "#F3F0E3",
  },
});
