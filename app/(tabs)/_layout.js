import { Tabs } from "expo-router";
import { View, I18nManager } from "react-native";
import HomeTabIcon from "../../assets/images/icons/HomeTabIcon";
import DissCoverTabIcon from "../../assets/images/icons/DissCoverTabIcon";
import CinemaTabIcon from "../../assets/images/icons/CinemaTabIcon";
import DashboardTabIcon from "../../assets/images/icons/DashboardTabIcon";

export default function TabLayout() {
  const screens = ["index", "dissCover", "cinema", "dashboard"];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#121212",
          borderColor: "#121212",
          direction: "rtl",
        },
        headerTitleAlign: "right",
      }}
    >
      {screens.map((screenName) => (
        <Tabs.Screen
          key={screenName}
          name={screenName}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => {
              const IconComponent =
                screenName === "index"
                  ? HomeTabIcon
                  : screenName === "dissCover"
                  ? DissCoverTabIcon
                  : screenName === "cinema"
                  ? CinemaTabIcon
                  : DashboardTabIcon;

              return (
                <View style={{ alignItems: "center", position: "relative" }}>
                  <IconComponent
                    strokeColor={focused ? "#F6C977" : "#697480"}
                  />
                  {focused && (
                    <View
                      style={{
                        position: "absolute",
                        bottom: -10,
                        width: 5,
                        height: 5,
                        borderRadius: 4,
                        backgroundColor: "#F6C977",
                      }}
                    />
                  )}
                </View>
              );
            },
          }}
        />
      ))}
    </Tabs>
  );
}
