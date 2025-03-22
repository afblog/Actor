import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  I18nManager,
} from "react-native";
import React from "react";

import StarIcon from "../assets/images/icons/StarIcon";
import ArrowDownIcon from "../assets/images/icons/ArrowDownIcon";

export default function MovieCover({ img, title, director, score }) {
  return (
    <ImageBackground
      source={img}
      style={styles.bgImage}
      resizeMode="cover"
      borderRadius={8}
    >
      <Text style={styles.movieName}>{title}</Text>
      <Text style={styles.movieDirector}>کارگردان: {director}</Text>
      <View style={styles.scoreBox}>
        <Text style={styles.movieScore}>{score}</Text>
        <StarIcon />
      </View>
      <TouchableOpacity>
        <View style={styles.downloadBox}>
          <Text style={styles.downloadText}>دانلود</Text>
          <ArrowDownIcon />
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    marginTop: 32,
    padding: 16,
    alignItems: I18nManager.isRTL ? "flex-start" : "flex-end",
  },

  movieName: {
    fontFamily: "Dana-DemiBold",
    color: "#F3F0E3",
    fontSize: 18,
  },

  movieDirector: {
    fontFamily: "Dana-Regular",
    color: "#F4F5F6",
    marginVertical: 8,
  },

  scoreBox: {
    width: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "rgba(255, 250, 242, .5)",
    borderRadius: 21,
  },

  movieScore: {
    fontFamily: "Dana-Regular",
    color: "#2E353C",
    transform: [{ translateY: 3 }],
  },

  downloadBox: {
    position: "absolute",
    right: I18nManager.isRTL ? -335 : 225,
    bottom: 0,
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#F6C977",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },

  downloadText: {
    fontFamily: "Dana-Regular",
    color: "#2E353C",
    transform: [{ translateY: 2 }],
  },
});
