import { useColorScheme as useRNColorScheme } from "react-native";

/**
 * Normalizes React Native's color scheme ("light" | "dark" | "unspecified" | null) to "light" | "dark"
 */
export function useColorScheme() {
  const colorScheme = useRNColorScheme();

  return colorScheme === "dark" ? "dark" : "light";
}
