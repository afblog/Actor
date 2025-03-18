import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.areaStyle}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>لطفا ابتد وارد حساب کاربری خود شوید</Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/Login")}
        >
          <Text style={styles.btnText}>ورود به حساب کاربری</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaStyle: {
    flex: 1,
    backgroundColor: "#121212",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#F3F0E3",
    fontFamily: "Morabba-Bold",
    fontSize: 20,
  },

  btn: {
    backgroundColor: "#F6C977",
    paddingVertical: 7,
    paddingHorizontal: 46,
    marginTop: 40,
    borderRadius: 4,
  },

  btnText: {
    fontFamily: "Dana-Medium",
    color: "#2E353C",
  },
});
