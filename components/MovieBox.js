import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import * as Svgs from "../assets/images/svg/Svg";

export default function MovieBox({ title, director, img }) {
  return (
    <View style={styles.box}>
      <View style={styles.boxItem}>
        <View style={styles.textBox}>
          <Text style={styles.movieName}>{title}</Text>
          <Text style={styles.movieDirector}>کارگردان: {director}</Text>
        </View>
        <View style={styles.movieImg}>
          {Svgs[img] && React.createElement(Svgs[img])}
        </View>
      </View>
      <TouchableOpacity style={styles.btnTicket}>
        <Text style={styles.btnTicketText}>خرید بلیت</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    position: "relative",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#202020",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  boxItem: {
    flexDirection: "row",
    gap: 8,
  },

  movieName: {
    fontFamily: "Dana-DemiBold",
    textAlign: "right",
    color: "#F3F0E3",
    fontSize: 18,
  },

  movieDirector: {
    fontFamily: "Dana-Regular",
    textAlign: "right",
    color: "#DCD9CA",
    marginTop: 4,
  },

  btnTicket: {
    position: "absolute",
    bottom: 10,
    left: 16,
    padding: 10,
    backgroundColor: "#F6C977",
    borderRadius: 4,
  },

  btnTicketText: {
    color: "#2E353C",
    fontFamily: "Dana-Regular",
  },
});
