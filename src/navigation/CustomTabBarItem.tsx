import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import { TouchableOpacity } from "react-native-gesture-handler"
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated"
import { StyleSheet } from "react-native"
import { useEffect } from "react"

import { useAppTheme } from "../hooks"
import Icon, { IconsType } from "../assets/icons"
import { Typography } from "../components/defaultUI"

interface ICustomTabBarItem {
    isFocused: boolean,
    options: BottomTabNavigationOptions,
    onPress: () => void
    onLongPress: () => void
    label: string
    iconName: IconsType,
}

const Y_OFFSET = 3
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
                translateY: translateY.value,
            }
        ]
    }))

    useEffect(() => {
        if (isFocused) {
            translateY.value = withSpring(-Y_OFFSET)
        } else {
            translateY.value = withSpring(0)
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
                styles.container,
                animatedStyles,
            ]}
        >
            <Icon
                name={iconName}
                disabled={!isFocused}
            />
            {isFocused &&
                <Typography
                    textColorInverted
                >
                    {label}
                </Typography>}

        </AnimatedTouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginHorizontal: 15,
        marginTop: 5,
    }
})