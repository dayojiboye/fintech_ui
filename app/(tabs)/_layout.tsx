import { Tabs } from "expo-router/js-tabs"

import { TabBar } from "@/components/tab-bar"
import Icon from "react-native-remix-icon"

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        sceneStyle: { boxShadow: "none" },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Icon name="home-5-line" size={size} color={color as string} />,
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "Cards",
          tabBarIcon: ({ color, size }) => <Icon name="bank-card-2-line" size={size} color={color as string} />,
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: "Transfer",
          tabBarIcon: ({ color, size }) => <Icon name="arrow-up-down-line" size={size} color={color as string} />,
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          tabBarIcon: ({ color, size }) => <Icon name="dashboard-line" size={size} color={color as string} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "User",
          tabBarIcon: ({ color, size }) => <Icon name="user-6-line" size={size} color={color as string} />,
        }}
      />
    </Tabs>
  )
}
