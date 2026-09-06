import { useRef, useState } from "react"
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, View, ViewStyle, useWindowDimensions } from "react-native"
import Animated, { Easing, useAnimatedStyle, withTiming } from "react-native-reanimated"

type CarouselProps<T> = {
  data: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  keyExtractor: (item: T, index: number) => string
  sideInset?: number
  itemSpacing?: number
  showIndicators?: boolean
  activeDotClassName?: string
  inactiveDotClassName?: string
  activeDotWidth?: number
  inactiveDotWidth?: number
  contentContainerStyle?: ViewStyle
}

export function Carousel<T>({
  data,
  renderItem,
  keyExtractor,
  sideInset = 40,
  itemSpacing = 16,
  showIndicators = true,
  activeDotClassName = "h-2 w-4 rounded-full bg-app-blue",
  inactiveDotClassName = "h-2 w-[37px] rounded-full bg-[#edeef1]",
  activeDotWidth = 16,
  inactiveDotWidth = 37,
  contentContainerStyle,
}: CarouselProps<T>) {
  const { width } = useWindowDimensions()
  const itemWidth = width - sideInset * 2
  const snapInterval = itemWidth + itemSpacing

  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<ScrollView>(null)

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / snapInterval)
    if (index !== activeIndex) setActiveIndex(index)
  }

  return (
    <View>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={snapInterval}
        decelerationRate="fast"
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{
          gap: itemSpacing,
          ...contentContainerStyle,
        }}
      >
        {data.map((item, index) => (
          <View key={keyExtractor(item, index)} style={{ width: itemWidth }}>
            {renderItem(item, index)}
          </View>
        ))}
      </ScrollView>

      {showIndicators && data.length > 1 && (
        <View className="mt-3 flex-row justify-center gap-1.5">
          {data.map((_, index) => (
            <CarouselIndicator
              key={index}
              focused={index === activeIndex}
              activeDotClassName={activeDotClassName}
              inactiveDotClassName={inactiveDotClassName}
              activeDotWidth={activeDotWidth}
              inactiveDotWidth={inactiveDotWidth}
            />
          ))}
        </View>
      )}
    </View>
  )
}

function CarouselIndicator({
  focused,
  activeDotClassName,
  inactiveDotClassName,
  activeDotWidth,
  inactiveDotWidth,
}: {
  focused: boolean
  activeDotClassName: string
  inactiveDotClassName: string
  activeDotWidth: number
  inactiveDotWidth: number
}) {
  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(focused ? activeDotWidth : inactiveDotWidth, { duration: 220, easing: Easing.linear }),
  }))

  return <Animated.View className={focused ? activeDotClassName : inactiveDotClassName} style={animatedStyle} />
}
