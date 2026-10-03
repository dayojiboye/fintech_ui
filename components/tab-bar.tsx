import * as Haptics from "expo-haptics"
import { BottomTabBarHeightCallbackContext, type BottomTabBarProps } from "expo-router/js-tabs"
import { CommonActions } from "expo-router/react-navigation"
import { useContext, useEffect, useState } from "react"
import { Platform, Pressable, StyleSheet, Text, View, type LayoutChangeEvent } from "react-native"
import Animated, { cubicBezier, useReducedMotion } from "react-native-reanimated"
import { useCSSVariable } from "uniwind"

const BAR_HEIGHT = 84
const INDICATOR_WIDTH = 63
const INDICATOR_HEIGHT = 2
const INDICATOR_MS = 200
const INDICATOR_EASING = cubicBezier(0.77, 0, 0.175, 1)
// React Navigation's default inactive tint for the light theme: rgb(28, 28, 30) at 50%.
const INACTIVE_COLOR = "rgba(28, 28, 30, 0.5)"

export function TabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
  const appBlue = useCSSVariable("--color-app-blue") as string
  const reduced = useReducedMotion()
  const reportHeight = useContext(BottomTabBarHeightCallbackContext)
  const [frames, setFrames] = useState<{ x: number; width: number }[]>([])
  const [armed, setArmed] = useState(false)

  const frame = frames[state.index]

  // Place the indicator without motion on first paint, then arm the transition,
  // otherwise it slides in from x=0 on launch.
  useEffect(() => {
    if (!frame || armed) return
    const id = requestAnimationFrame(() => setArmed(true))
    return () => cancelAnimationFrame(id)
  }, [frame, armed])

  const onItemLayout = (index: number, e: LayoutChangeEvent) => {
    const { x, width } = e.nativeEvent.layout
    setFrames((prev) => {
      const cur = prev[index]
      if (cur && cur.x === x && cur.width === width) return prev
      const next = prev.slice()
      next[index] = { x, width }
      return next
    })
  }

  return (
    <View
      style={[styles.bar, { paddingBottom: insets.bottom }]}
      onLayout={(e) => reportHeight?.(e.nativeEvent.layout.height)}
    >
      <View accessibilityRole="tablist" className="flex-1 flex-row">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label = options.title ?? route.name
          const focused = index === state.index
          const color = focused ? appBlue : INACTIVE_COLOR

          return (
            <Pressable
              key={route.key}
              accessibilityRole="tab"
              accessibilityState={{ selected: focused }}
              accessibilityLabel={options.tabBarAccessibilityLabel ?? label}
              android_ripple={{ borderless: true, color: "rgba(0, 0, 0, .32)" }}
              className="flex-1 items-center p-[5px]"
              onLayout={(e) => onItemLayout(index, e)}
              onPressIn={() => {
                if (process.env.EXPO_OS === "ios") {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                }
              }}
              onPress={() => {
                const event = navigation.emit({ type: "tabPress", target: route.key, canPreventDefault: true })
                if (!focused && !event.defaultPrevented) {
                  navigation.dispatch({ ...CommonActions.navigate(route), target: state.key })
                }
              }}
              onLongPress={() => navigation.emit({ type: "tabLongPress", target: route.key })}
            >
              <View className="h-7 items-center justify-center">
                {options.tabBarIcon?.({ focused, color, size: 24 })}
              </View>
              <Text style={{ color, fontSize: 13, fontWeight: focused ? "600" : "400" }}>{label}</Text>
            </Pressable>
          )
        })}

        <Animated.View
          pointerEvents="none"
          style={[
            styles.indicator,
            {
              backgroundColor: appBlue,
              opacity: frame ? 1 : 0,
              transform: [{ translateX: frame ? frame.x + frame.width / 2 - INDICATOR_WIDTH / 2 : 0 }],
              transitionProperty: "transform",
              transitionDuration: armed && !reduced ? INDICATOR_MS : 0,
              transitionTimingFunction: INDICATOR_EASING,
            },
          ]}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    height: BAR_HEIGHT,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    ...Platform.select({
      ios: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  indicator: {
    position: "absolute",
    top: 0,
    left: 0,
    width: INDICATOR_WIDTH,
    height: INDICATOR_HEIGHT,
  },
})
