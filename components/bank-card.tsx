import { LinearGradient } from "expo-linear-gradient"
import { cn } from "heroui-native"
import { useState } from "react"
import { Image, Pressable, PressableProps, Text, View } from "react-native"
import RemixIcon from "react-native-remix-icon"

export enum BankCardType {
  DEBIT = "DEBIT",
  CREDIT = "CREDIT",
}

export function BankCard({ cardType, ...props }: { cardType: BankCardType } & PressableProps) {
  const [showCardNumber, setShowCardNumber] = useState(false)

  const isCreditCard = cardType === BankCardType.CREDIT

  return (
    <Pressable {...props}>
      <LinearGradient
        colors={isCreditCard ? ["#2D0A31", "#5C1250", "#7A1B5E"] : ["#000", "#2e3081", "#1b1c4b"]}
        style={{ borderRadius: 16, height: 189, padding: 16, position: "relative" }}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <View className="flex-row gap-4 justify-between items-center">
          <Text className="font-bold text-base text-white">John Smith</Text>
          <Pressable onPress={() => setShowCardNumber(!showCardNumber)}>
            <RemixIcon name={showCardNumber ? "eye-line" : "eye-off-line"} color="#fff" size={24} />
          </Pressable>
        </View>
        <Text className="text-white text-sm capitalize mt-px">{cardType.toLowerCase()}</Text>

        <View className="gap-px mt-[18px] ">
          <Text className="text-white text-sm">Card Number</Text>
          <Text className="text-white text-sm">
            {showCardNumber ? (
              "4756 2589 0023 9018"
            ) : (
              <>
                4756 <Text className="text-xs">● ● ● ● ● ● ● ●</Text> 9018
              </>
            )}
          </Text>
        </View>

        <View className="mt-auto flex-row gap-4 justify-between">
          <View className="self-start flex-row gap-8">
            <View className="gap-1">
              <Text className="text-white text-sm">Expiry Date</Text>
              <Text className="text-white text-sm">
                {showCardNumber ? "02 / 25" : <Text className="text-xs">● ● ● ●</Text>}
              </Text>
            </View>
            <View className="gap-1">
              <Text className="text-white text-sm">CVC</Text>
              <Text className="text-white text-sm">
                {showCardNumber ? "123" : <Text className="text-xs">● ● ●</Text>}
              </Text>
            </View>
          </View>

          <Image
            className={cn("absolute right-0 bottom-2 w-[52px] h-4", { "w-[46px] h-7": isCreditCard })}
            source={
              isCreditCard
                ? require("../assets/images/master-card-logo.png")
                : require("../assets/images/visa-logo.png")
            }
          ></Image>
        </View>
      </LinearGradient>
    </Pressable>
  )
}
