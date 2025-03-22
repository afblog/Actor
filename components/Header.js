import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  I18nManager,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import UserAvatar from "../assets/images/svg/user-avatar.svg";
import BagIcon from "../assets/images/icons/BagIcon";

export default function Header() {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.push("/Login")}>
        <View style={styles.avatar}>
          <UserAvatar />
        </View>
      </TouchableOpacity>
      <Image
        style={styles.img}
        source={require("../assets/images/png/logo.png")}
      />
      <View style={styles.cartItem}>
        <BagIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },

  avatar: {
    backgroundColor: "#fff",
    borderRadius: 50,
    overflow: "hidden",
  },

  img: {
    width: 50,
    height: 50,
  },

  cartItem: {
    borderColor: "#F6C977",
    borderWidth: 1,
    padding: 5,
    borderRadius: 8,
  },
});
