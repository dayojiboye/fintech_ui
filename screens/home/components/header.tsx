import { Avatar, Button } from "heroui-native"
import { Text, View } from "react-native"
import RemixIcon from "react-native-remix-icon"

export default function Header() {
  return (
    <View className="px-4 pb-3 flex-row justify-between gap-4 items-center">
      <View className="flex-row items-center gap-2.5">
        <Avatar alt="John Smith" className="size-8">
          <Avatar.Fallback>JS</Avatar.Fallback>
          <Avatar.Image source={require("../../../assets/images/john-smith.png")} />
        </Avatar>
        <Text className="text-sm">Hi, John Smith</Text>
      </View>

      <View className="relative size-6">
        <Button isIconOnly variant="ghost" className="size-full" animation={false}>
          <RemixIcon name="notification-3-line" />
        </Button>
        <View className="absolute size-2.5 bg-black rounded-full top-0 right-0 border-2 border-white" />
      </View>
    </View>
  )
}
