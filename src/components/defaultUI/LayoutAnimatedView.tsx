import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { enteringType, exitingType } from "../../types/animationTypes";
import { useTypedSelector } from "../../hooks";


interface IAnimatedView {
    children?: React.ReactNode,
    style?: StyleProp<ViewStyle>
    entering?: enteringType
    exiting?: exitingType
}

export const LayoutAnimatedView: React.FC<IAnimatedView> = (props: IAnimatedView): JSX.Element => {

    const { layoutAnimationEnabled } = useTypedSelector(state => state.app)

    const {
        children,
        style,
        entering = FadeInDown.delay(100).duration(1000).springify(),
        exiting = FadeOutDown.delay(100).duration(1000).springify(),
    } = props

    return (
        <Animated.View
            entering={layoutAnimationEnabled ? entering : undefined}
            exiting={layoutAnimationEnabled ? exiting : undefined}
            style={style}
        >
            {children}
        </Animated.View>
    )
}