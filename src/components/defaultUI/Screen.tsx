
import React from "react";
import {
    StatusBar,
    StyleProp,
    StyleSheet,
    View,
    ViewStyle
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useAppTheme } from "../../hooks";
interface IScreenComponent {
    children: JSX.Element | JSX.Element[] | null,
    style?: StyleProp<ViewStyle>
    statusBarIsVisible?: boolean,

}

export const Screen: React.FC<IScreenComponent> = (props: IScreenComponent): JSX.Element => {
    const { children, statusBarIsVisible } = props

    const insets = useSafeAreaInsets()
    const { colors } = useAppTheme()

    return (
        <View
            style={[style.container, {
                backgroundColor: colors.primary,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }]}
        >
            {
                statusBarIsVisible &&
                <StatusBar
                    hidden={true}
                    barStyle={'dark-content'}
                    backgroundColor={'red'}
                />
            }

            {children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,

    }
})