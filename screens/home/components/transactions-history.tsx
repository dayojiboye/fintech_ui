import SectionHeader from "@/components/section-header"
import { cn } from "heroui-native"
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native"
import RemixIcon, { IconName } from "react-native-remix-icon"

export default function TransactionsHistory() {
  return (
    <View className="py-3 gap-3 px-4">
      <SectionHeader label="Transactions" buttonLabel="View All" />
      <View className="p-3 rounded-[12px] bg-[#f6f6fd] gap-3">
        <Text className="text-muted text-xs">Today</Text>
        <TransactionHistoryItem
          title="Dribbble"
          cardType="Visa Credit Card"
          amount="1200.00"
          logo={require("../../../assets/images/dribbble.png")}
        />
        <Text className="text-muted text-xs">Yesterday</Text>
        <TransactionHistoryItem
          title="Account Credited"
          cardType="Master Debit Card"
          amount="1,200"
          isCredit
          icon="bank-line"
        />
        <TransactionHistoryItem
          title="YouTube Monthly Subscription"
          cardType="Visa Card"
          amount="1,200.00"
          logo={require("../../../assets/images/youtube.png")}
        />
        <TransactionHistoryItem
          title="Credit Card Payment"
          cardType="Visa Card"
          amount="1,200"
          isCredit
          icon="bank-card-2-line"
        />
        <TransactionHistoryItem
          title="Tik Tok"
          cardType="Visa Card"
          amount="1,200.00"
          logo={require("../../../assets/images/tiktok.png")}
        />
        <TransactionHistoryItem
          title="Slack"
          cardType="Master Card"
          amount="1,200.00"
          logo={require("../../../assets/images/slack.png")}
        />
      </View>
    </View>
  )
}

function TransactionHistoryItem({
  title,
  cardType,
  amount,
  logo,
  isCredit,
  icon,
}: {
  title: string
  cardType: string
  amount: string
  logo?: ImageSourcePropType
  isCredit?: boolean
  icon?: IconName
}) {
  return (
    <Pressable className="flex-row gap-4 items-center border-b-[0.5px] border-b-[#d8dbdf] pb-[15px]">
      <View className="rounded-[4px] size-10 bg-white items-center justify-center">
        {icon ? <RemixIcon name={icon} size={24} /> : <Image source={logo} className="size-6" />}
      </View>
      <View className="gap-px">
        <Text className="font-medium text-sm">{title}</Text>
        <Text className="text-muted text-xs">{cardType}</Text>
      </View>
      <Text className={cn("ml-auto self-start text-sm font-medium", { "text-[#00c951]": isCredit })}>
        {isCredit ? "+" : "-"}$ {amount}
      </Text>
    </Pressable>
  )
}
