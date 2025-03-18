import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import Header from "../../components/Header";
import SearchInput from "../../components/InputSearch";
import MovieBox from "../../components/MovieBox";

export default function index() {
  return (
    <SafeAreaView style={styles.areaStyle}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <SearchInput placeholder="کدوم فیلم رو ببینیم؟" />
        <View style={styles.MovieBox}>
          <MovieBox img="Movie1" title="فسیل" director="کریم امینی" />
          <MovieBox img="Movie2" title="سه کام حبس" director="کریم امینی" />
          <MovieBox img="Movie3" title="تصور" director="کریم امینی" />
          <MovieBox img="Movie4" title="مصلحت" director="کریم امینی" />
          <MovieBox img="Movie5" title="کت چرمی" director="کریم امینی" />
          <MovieBox img="Movie6" title="شهر هرت" director="کریم امینی" />
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

  MovieBox: {
    marginTop: 48,
    gap: 16,
  },
});
