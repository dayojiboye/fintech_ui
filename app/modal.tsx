import { Link } from "expo-router";
import { Button } from "heroui-native/button";
import { Text, View } from "react-native";

export default function ModalScreen() {
  return (
    <View className="bg-background flex-1 items-center justify-center gap-2">
      <Text className="text-foreground text-lg">This is a modal</Text>
      <Link href="/" dismissTo asChild>
        <Button variant="secondary">
          <Button.Label className="text-foreground">Go to home screen</Button.Label>
        </Button>
      </Link>
    </View>
  );
}
