import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";

import UserAvatar from "../assets/images/svg/user-avatar-login.svg";
import LoginGoogleIcon from "../assets/images/icons/loginGoogleIcon";
import LoginUserIcon from "../assets/images/icons/loginUserIcon";

export default function Login() {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(true);

  const inputPhoneRegex = useMemo(() => /^[1-9][0-9]{9}$/, []);

  const loginUser = () => {
    const isValidRegex = inputPhoneRegex.test(phoneNumber);

    if (!isValidRegex) {
      setIsValidPhone(false);
    } else {
      setIsValidPhone(true);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.avatar}>
            <UserAvatar />
          </View>
          <Text style={styles.login_title}>ورود/ثبت نام</Text>
          <Text style={styles.login_text}>
            برای ورود یا ثبت نام شماره موبایل خود را وارد نمایید.
          </Text>
          <View style={styles.input_box}>
            <View style={styles.prefixContainer}>
              <Text style={styles.prefixText}>+ 98</Text>
              <View style={styles.line}></View>
            </View>
            <TextInput
              value={phoneNumber}
              style={styles.input}
              selectionColor="#ABB7C4"
              placeholder="9*********"
              placeholderTextColor="#C2CEDB"
              maxLength={10}
              keyboardType="numeric"
              inputMode="numeric"
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </View>
          {!isValidPhone && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorTitle}>شماره تلفن معتبر نیست:</Text>
              <View style={styles.error_box}>
                <Text style={styles.error}>
                  شماره تلفن باید بدون صفر وارد شود. (9364052062)
                </Text>
                <View style={styles.errorDot}></View>
              </View>
              <View style={styles.error_box}>
                <Text style={styles.error}>
                  از کاراکتر های مجاز استفاده کنید. (فقط اعداد)
                </Text>
                <View style={styles.errorDot}></View>
              </View>
              <View style={styles.error_box}>
                <Text style={styles.error}>
                  شماره تلفن را با حروف لاتین تایپ کنید.
                </Text>
                <View style={styles.errorDot}></View>
              </View>
            </View>
          )}
          <TouchableOpacity
            style={styles.inputBtn}
            activeOpacity={0.7}
            onPress={loginUser}
          >
            <Text style={styles.inputBtnText}>ادامه</Text>
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <View style={styles.orLine}></View>
            <Text style={styles.orText}>یا</Text>
            <View style={styles.orLine}></View>
          </View>
          <View style={{ gap: 24 }}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.loginBtnStyle}>
                <Text style={styles.loginBtnText}>ورود با ایمیل</Text>
                <LoginGoogleIcon />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/(tabs)")}
            >
              <View style={styles.loginBtnStyle}>
                <Text style={styles.loginBtnText}>ورود به عنوان مهمان</Text>
                <LoginUserIcon />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    backgroundColor: "#ABB7C4",
    borderRadius: 100,
    overflow: "hidden",
  },

  login_title: {
    marginVertical: 24,
    fontSize: 20,
    fontFamily: "Morabba-Bold",
    color: "#DBE6F2",
  },

  login_text: {
    color: "#ABB7C4",
    fontFamily: "Dana-Regular",
    marginBottom: 24,
  },

  input_box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F4F5F6",
    width: "80%",
    height: 40,
    borderRadius: 8,
  },

  prefixContainer: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },

  prefixText: {
    color: "#94A0AE",
    fontSize: 16,
    paddingBottom: Platform.OS === "android" ? 2 : 0,
  },

  line: {
    width: 1,
    height: "70%",
    backgroundColor: "#C2CEDB",
    marginLeft: 8,
  },

  input: {
    color: "#94A0AE",
    width: "80%",
    height: "100%",
    fontSize: 16,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  inputBtn: {
    backgroundColor: "#F6C977",
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 46,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  error_box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 5,
  },

  errorContainer: {
    width: "80%",
    marginTop: 12,
  },

  errorTitle: {
    color: "#F5222D",
    fontFamily: "Dana-Medium",
    textAlign: "right",
  },

  error: {
    color: "#F5222D",
    fontFamily: "Dana-Regular",
  },

  errorDot: {
    width: 5,
    height: 5,
    backgroundColor: "#F5222D",
    borderRadius: 100,
  },

  loginBtnText: {
    fontFamily: "Dana-Regular",
    color: "#F6C977",
    textAlign: "center",
  },

  inputBtnText: {
    color: "#2E353C",
    fontFamily: "Dana-Regular",
    fontSize: 16,
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    marginTop: 46,
    marginBottom: 48,
  },

  orText: {
    fontFamily: "Dana-Regular",
    color: "#C2CEDB",
  },

  orLine: {
    width: 121,
    height: 1,
    backgroundColor: "#2E353C",
  },

  loginBtnStyle: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#F6C977",
    paddingVertical: 6,
    paddingHorizontal: 86,
  },
});
