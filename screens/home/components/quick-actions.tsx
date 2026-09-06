import SectionHeader from "@/components/section-header"
import { Pressable, Text, View } from "react-native"
import RemixIcon, { IconName } from "react-native-remix-icon"

export default function QuickActions() {
  return (
    <View className="py-3 gap-3 px-4">
      <SectionHeader label="Quick Actions" buttonLabel="Edit" />
      <View className="mt-3 px-[17px] flex-row justify-center gap-6">
        <QuickActionButton label="Local Transfer" icon="arrow-up-down-line" />
        <QuickActionButton label="Bill Payment" icon="receipt-line" />
        <QuickActionButton label="Card Payment" icon="bank-card-2-line" />
        <QuickActionButton label="Raise a Request" icon="message-2-line" />
        <QuickActionButton label="Explore Services" icon="dashboard-line" />
      </View>
    </View>
  )
}

function QuickActionButton({ label, icon }: { label: string; icon: IconName }) {
  return (
    <Pressable className="gap-2 items-center w-12">
      <View className="bg-[#f6f6fd] rounded-[8px] items-center justify-center size-12">
        <RemixIcon name={icon} size={24} />
      </View>
      <Text className="text-center text-muted text-xs">{label}</Text>
    </Pressable>
  )
}
