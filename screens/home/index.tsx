import { ScrollView, View } from "react-native"
import Balance from "./components/balance"
import BankCards from "./components/bank-cards"
import Header from "./components/header"
import QuickActions from "./components/quick-actions"
import TransactionsHistory from "./components/transactions-history"

export default function Home() {
  return (
    <View className="pt-safe flex-1 bg-[#f6f6fd]">
      <Header />
      <ScrollView className="flex-1" contentContainerClassName="grow-1 pt-3">
        <Balance />
        <View className="flex-1 bg-white mt-3 pb-[100px]">
          <BankCards />
          <QuickActions />
          <TransactionsHistory />
        </View>
      </ScrollView>
    </View>
  )
}
