import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "../../components/Header";
import Slider from "../../components/Slider";
import InputSearch from "../../components/InputSearch";
import CategoryTitle from "../../components/CategoryTitle";

export default function index() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.areaStyle}>
        <View style={styles.container}>
          <Header />
          <InputSearch placeholder="الان وقت فیلم دیدنه" />
          <View>
            <CategoryTitle title="دسته بندی" marginTop={60} />
            <View style={styles.categoryBoxs}>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.category}>😆</Text>
                <Text style={styles.category_title}>کمدی</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.category}>😍</Text>
                <Text style={styles.category_title}>عاشقانه</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.category}>😱</Text>
                <Text style={styles.category_title}>ترسناک</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.category}>😡</Text>
                <Text style={styles.category_title}>اکشن</Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 48 }}>
            <Text style={styles.movieTitle}>فیلم و سریال هفته</Text>
            <Slider />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  areaStyle: {
    flex: 1,
    backgroundColor: "#121212",
  },

  container: {
    padding: 16,
  },

  category: {
    fontSize: 26,
    padding: 22,
    backgroundColor: "rgba(255, 255, 255, .2)",
    borderRadius: 16,
    marginBottom: 8,
  },

  category_title: {
    color: "#7E8A97",
    fontFamily: "Dana-Medium",
  },

  categoryItemTitle: {
    fontFamily: "Morabba-Medium",
    fontSize: 18,
    color: "#F3F0E3",
  },

  categoryBoxs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  movieTitle: {
    fontFamily: "Morabba-Medium",
    fontSize: 18,
    color: "#F3F0E3",
    textAlign: "right",
  },
});
