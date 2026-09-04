import { useRouter } from "expo-router";
import { Button } from "heroui-native/button";
import { View } from "react-native";
import Icon from "react-native-remix-icon";
import { Uniwind, useUniwind } from "uniwind";

export default function HomeScreen() {
  const router = useRouter();
  const { theme } = useUniwind();

  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Button onPress={() => router.push("/modal")}>Open Modal</Button>
      <View className="flex-row mt-5 gap-3">
        <Button isIconOnly variant="tertiary" onPress={() => Uniwind.setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "dark" ? <Icon name="sun-fill" size={24} color="gold" /> : <Icon name="moon-fill" size={24} />}
        </Button>
      </View>
    </View>
  );
}
