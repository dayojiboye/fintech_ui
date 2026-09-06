import { cn } from "heroui-native"
import { Pressable, Text, View, ViewProps } from "react-native"
import RemixIcon from "react-native-remix-icon"
import { useCSSVariable } from "uniwind"

interface SectionHeaderProps extends ViewProps {
  label: string
  buttonLabel: string
  className?: string
}

export default function SectionHeader({ label, buttonLabel, className, ...props }: SectionHeaderProps) {
  const appBlue = useCSSVariable("--color-app-blue") as string

  return (
    <View className={cn("flex-row items-center gap-4 justify-between", className)} {...props}>
      <Text className="text-muted text-sm">{label}</Text>
      <Pressable className="flex-row gap-1.5 items-center">
        <Text className="font-medium text-app-blue text-xs">{buttonLabel}</Text>
        <RemixIcon name="arrow-right-double-line" color={appBlue} size={16} />
      </Pressable>
    </View>
  )
}
