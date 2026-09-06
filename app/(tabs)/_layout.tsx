import { Tabs } from "expo-router"

import { HapticTab } from "@/components/haptic-tab"
import { Platform, Text, View } from "react-native"
import Icon, { IconName } from "react-native-remix-icon"
import { useCSSVariable } from "uniwind"

export default function TabLayout() {
  const appBlue = useCSSVariable("--color-app-blue") as string

  return (
    <Tabs
      screenOptions={{
        sceneStyle: { boxShadow: "none" },
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          height: 84,
          paddingHorizontal: 8,
          ...Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              position: "absolute",
            },
            android: {
              elevation: 8,
            },
          }),
        },
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: appBlue,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: ({ color, focused }) => <TabLabel label="Home" color={color as string} focused={focused} />,
          tabBarIcon: ({ color, focused }) => <TabIcon name="home-5-line" color={color as string} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "Cards",
          tabBarLabel: ({ color, focused }) => <TabLabel label="Cards" color={color as string} focused={focused} />,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="bank-card-2-line" color={color as string} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: "Transfer",
          tabBarLabel: ({ color, focused }) => <TabLabel label="Transfer" color={color as string} focused={focused} />,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="arrow-up-down-line" color={color as string} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          tabBarLabel: ({ color, focused }) => <TabLabel label="Services" color={color as string} focused={focused} />,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="dashboard-line" color={color as string} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "User",
          tabBarLabel: ({ color, focused }) => <TabLabel label="User" color={color as string} focused={focused} />,
          tabBarIcon: ({ color, focused }) => <TabIcon name="user-6-line" color={color as string} focused={focused} />,
        }}
      />
    </Tabs>
  )
}

function TabIcon({ name, color, focused }: { name: IconName; color: string; focused: boolean }) {
  return (
    <View className="items-center w-[63px] h-[62px] relative justify-center">
      {focused && <View className="absolute h-0.5 w-full bg-app-blue top-3" />}
      <Icon size={24} name={name} color={color} />
    </View>
  )
}

function TabLabel({ label, color, focused }: { label: string; color: string; focused: boolean }) {
  return (
    <Text
      style={{
        color,
        fontSize: 13,
        fontWeight: focused ? "600" : "400",
      }}
    >
      {label}
    </Text>
  )
}
