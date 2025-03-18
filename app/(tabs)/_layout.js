import { Tabs } from "expo-router";
import { View } from "react-native";
import HomeTabIcon from "../../assets/images/icons/HomeTabIcon";
import DissCoverTabIcon from '../../assets/images/icons/DissCoverTabIcon'
import CinemaTabIcon from "../../assets/images/icons/CinemaTabIcon";
import DashboardTabIcon from "../../assets/images/icons/DashboardTabIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#121212",
          borderColor: '#121212'
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", position: "relative" }}>
              <HomeTabIcon strokeColor={focused ? "#F6C977" : "#697480"} />
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
          ),
        }}
      />
      <Tabs.Screen
        name="dissCover"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", position: "relative" }}>
              <DissCoverTabIcon strokeColor={focused ? "#F6C977" : "#697480"} />
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
          ),
        }}
      />
      <Tabs.Screen
        name="cinema"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", position: "relative" }}>
              <CinemaTabIcon strokeColor={focused ? "#F6C977" : "#697480"} />
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
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", position: "relative" }}>
              <DashboardTabIcon strokeColor={focused ? "#F6C977" : "#697480"} />
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
          ),
        }}
      />
    </Tabs>
  );
}
