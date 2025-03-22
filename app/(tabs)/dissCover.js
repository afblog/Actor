import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  I18nManager,
} from "react-native";

import Header from "../../components/Header";
import SearchInput from "../../components/InputSearch";
import CategoryTitle from "../../components/CategoryTitle";
import MovieCover from "../../components/MovieCover";

import * as SVGs from "../../assets/images/svg/Svg";

export default function index() {
  return (
    <SafeAreaView style={styles.areaStyle}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <SearchInput placeholder="چه فیلمی دوست داری ببینی" />
        <MovieCover
          img={require("../../assets/images/png/Banner1.png")}
          title="اکتور"
          director="امید شمس"
          score="4.4/5"
        />
        <CategoryTitle title="کمدی" marginTop={32} />
        <View style={styles.comediCategory}>
          <SVGs.Comedi4 />
          <SVGs.Comedi3 />
          <SVGs.Comedi2 />
          <SVGs.Comedi1 />
        </View>
        <MovieCover
          img={require("../../assets/images/png/Banner2.png")}
          title="انفرادی"
          director="امید شمس"
          score="4.4/5"
        />
        <CategoryTitle title="درام" marginTop={32} />
        <View style={styles.comediCategory}>
          <SVGs.Drame4 />
          <SVGs.Drame3 />
          <SVGs.Drame2 />
          <SVGs.Drame1 />
        </View>
        <MovieCover
          img={require("../../assets/images/png/Banner3.png")}
          title="مسابقه TNT"
          director="حامد آهنگی"
          score="4.4/5"
        />
        <CategoryTitle title="خارجی" marginTop={32} />
        <View style={styles.comediCategory}>
          <SVGs.Kharegi4 />
          <SVGs.Kharegi3 />
          <SVGs.Kharegi2 />
          <SVGs.Kharegi1 />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaStyle: {
    flex: 1,
    backgroundColor: "#121212",
  },

  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },

  comediCategory: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
