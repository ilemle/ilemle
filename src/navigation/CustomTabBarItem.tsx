import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import { GestureResponderEvent } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Animated, { FadeInDown, FadeInRight, FadeInUp, SharedValue, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from "react-native-reanimated"
import { useAppTheme } from "../hooks"
import { useEffect } from "react"
import { Typography } from "../components/defaultUI/Typography"
import Icon, { IconsType } from "../assets/icons"

interface ICustomTabBarItem {
    isFocused: boolean,
    options: BottomTabNavigationOptions,
    onPress: () => void
    onLongPress: () => void
    label: string
    iconName: IconsType,
}

const Y_OFFSET = 15
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

export const CustomTabBarItem = (props: ICustomTabBarItem) => {

    const {
        isFocused,
        options,
        onPress,
        onLongPress,
        label,
        iconName,
    } = props

    const { colors } = useAppTheme()


    const translateY = useSharedValue(0)

    const animatedStyles = useAnimatedStyle(() => ({

        transform: [
            {
                translateY: isFocused ? translateY.value : 0,
            }
        ]
    }))

    useEffect(() => {
        if (isFocused) {
            translateY.value = withSpring(-Y_OFFSET)
            console.log(`is 🍏 ${label} | ${translateY.value} | ${isFocused}`);

        } else {
            translateY.value = withDelay(1000, withSpring(0))
            console.log(`is 🍎 ${label} | ${translateY.value} | ${isFocused}`);

        }
    }, [isFocused])



    return (
        <AnimatedTouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
                animatedStyles,
                {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.tabBar.background,
                    // borderColor: colors.tabBar.selectedText,
                    // borderWidth: 1,
                    padding: 5,
                    borderRadius: 25,
                    marginVertical: 5,
                    marginHorizontal: 15,

                    width: 82,
                    height: 56,
                },

            ]}
        >
            <Icon
                name={iconName}
                disabled={!isFocused}
            />


        </AnimatedTouchableOpacity>
    )
}
