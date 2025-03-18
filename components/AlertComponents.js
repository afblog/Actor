import { View, StyleSheet, Modal } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

export default function AlertComponents({ visible, children }) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <BlurView
        intensity={30}
        style={styles.blurBackground}
        tint="dark"
        experimentalBlurMethod="default "
      />

      <View style={styles.alertContainer}>
        <View style={styles.alertBox}>{children}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  alertContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  blurBackground: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  alertBox: {
    width: 250,
    padding: 20,
    backgroundColor: "#202020",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    gap: 21,
  },
});
