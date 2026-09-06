import { Button } from "heroui-native"
import { useState } from "react"
import { Pressable, Text, View } from "react-native"
import RemixIcon, { IconName } from "react-native-remix-icon"

export default function Balance() {
  const [hideBalance, setHideBalance] = useState(false)

  return (
    <View className="px-4">
      <Button
        animation={false}
        variant="ghost"
        className="size-fit p-0 gap-6 self-start"
        onPress={() => setHideBalance(!hideBalance)}
      >
        <Text className="text-base text-muted">Balance</Text>
        <RemixIcon name={hideBalance ? "eye-off-line" : "eye-line"} size={16} />
      </Button>
      <Text className="text-2xl font-bold mt-2">{hideBalance ? "******" : "$ 1,000.00"}</Text>
      <View className="flex-row gap-4 justify-between mt-3">
        <HeaderActionButton label="Add Funds" icon="add-line" />
        <HeaderActionButton label="Send" icon="arrow-right-up-line" />
        <HeaderActionButton label="Request" icon="arrow-right-down-line" />
        <HeaderActionButton label="Withdraw" icon="arrow-right-line" />
      </View>
    </View>
  )
}

function HeaderActionButton({ label, icon }: { label: string; icon: IconName }) {
  return (
    <Pressable className="w-[62px] h-[46px] gap-1.5 items-center">
      <View className="w-full h-[26px] bg-app-blue p-1.5 items-center justify-center rounded-[16px]">
        <RemixIcon name={icon} size="16" color="#fff" />
      </View>
      <Text className="text-center text-xs text-muted">{label}</Text>
    </Pressable>
  )
}
