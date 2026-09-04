import { Tabs } from "expo-router";

import { HapticTab } from "@/components/haptic-tab";
import Icon from "react-native-remix-icon";
import { useUniwind } from "uniwind";

export default function TabLayout() {
  const { theme } = useUniwind();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: theme === "dark" ? "#111" : "#ccc",
          backgroundColor: theme === "dark" ? "#000" : "#fff",
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Icon size={28} name="home-4-line" color={color} />,
        }}
      />
    </Tabs>
  );
}
