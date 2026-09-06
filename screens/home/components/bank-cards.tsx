import { BankCard, BankCardType } from "@/components/bank-card"
import SectionHeader from "@/components/section-header"
import { Carousel } from "@/components/ui/carousel"
import { View } from "react-native"

export default function BankCards() {
  return (
    <View className="py-3 gap-3">
      <SectionHeader label="My Cards" buttonLabel="View All" className="px-4" />
      <Carousel
        data={Object.values(BankCardType)}
        keyExtractor={(item) => item}
        renderItem={(cardType) => <BankCard cardType={cardType} />}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  )
}
