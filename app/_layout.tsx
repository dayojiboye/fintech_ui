import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { HeroUINativeProvider } from "heroui-native/provider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { useUniwind } from "uniwind";
import "../global.css";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const { theme } = useUniwind();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{
              presentation: "modal",
              title: "Modal",
              headerStyle: {
                backgroundColor: theme === "dark" ? "oklch(12% 0.005 285.823)" : "#fff",
              },
              headerTitleStyle: {
                color: theme === "dark" ? "oklch(0.9911 0 0)" : "oklch(0.2103 0.0059 285.89)",
              },
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
