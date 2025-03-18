import React, { useCallback, useEffect, useState } from "react";
import { Stack } from "expo-router";
import {
  View,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  BackHandler,
} from "react-native";

import * as NavigationBar from "expo-navigation-bar";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import AlertComponents from "../components/AlertComponents";
import AlertHappyIcon from "../assets/images/icons/AlertHappyIcon";
import AlertSadIcon from "../assets/images/icons/AlertSadIcon";

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);

  const customNavigationBar = async () => {
    await NavigationBar.setBackgroundColorAsync("#121212");
    await NavigationBar.setButtonStyleAsync("light");
  };

  const hideSplashScreen = async () => {
    await SplashScreen.preventAutoHideAsync();
    setTimeout(() => {
      setAppIsReady(true);
    }, 2000);
  };

  const LoadingTheFont = async () => {
    await Font.loadAsync({
      "Dana-Medium": require("../assets/fonts/Dana/Dana-Medium.ttf"),
      "Dana-Regular": require("../assets/fonts/Dana/Dana-Regular.ttf"),
      "Dana-DemiBold": require("../assets/fonts/Dana/Dana-DemiBold.ttf"),
      "Morabba-Medium": require("../assets/fonts/Morabba/Morabba-Medium.ttf"),
      "Morabba-Bold": require("../assets/fonts/Morabba/Morabba-Medium.ttf"),
      "Morabba-Light": require("../assets/fonts/Morabba/Morabba-Medium.ttf"),
    });
  };

  const exitingTheApp = useCallback(() => {
    setIsVisibleAlert(false);
    BackHandler.exitApp();
  }, []);

  const openExitModalApp = useCallback(() => {
    setIsVisibleAlert(true);
    return true;
  }, []);

  useEffect(() => {
    hideSplashScreen();
    customNavigationBar();
    LoadingTheFont();
  }, []);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", openExitModalApp);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", openExitModalApp);
  }, [openExitModalApp]);

  if (!appIsReady) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require("../assets/images/png/app-logo.png")}
          style={styles.logo}
        />
      </View>
    );
  }

  return (
    <>
      <AlertComponents visible={isVisibleAlert}>
        <Text style={styles.alertTitle}>واقعا میخوای بری؟</Text>
        <TouchableOpacity
          style={styles.alertBtnHappy}
          onPress={() => setIsVisibleAlert(false)}
        >
          <Text style={styles.alertBtnTextHappy}>خیر</Text>
          <AlertHappyIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.alertBtnSad} onPress={exitingTheApp}>
          <Text style={styles.alertBtnTextSad}>بله</Text>
          <AlertSadIcon />
        </TouchableOpacity>
      </AlertComponents>

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ headerShown: false }} />
      </Stack>
      {Platform.OS === "ios" ? (
        <StatusBar style="light" barStyle="light-content" />
      ) : (
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },

  alertTitle: {
    textAlign: "center",
    fontFamily: "Morabba-Medium",
    color: "#7E8A97",
  },

  alertBtnHappy: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#52C41A",
    borderRadius: 8,
    paddingVertical: 8,
  },

  alertBtnSad: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#F5222D",
    borderRadius: 8,
    paddingVertical: 8,
  },

  alertBtnTextHappy: {
    color: "#52C41A",
    fontFamily: "Dana-Regular",
  },

  alertBtnTextSad: {
    color: "#F5222D",
    fontFamily: "Dana-Regular",
  },
});
