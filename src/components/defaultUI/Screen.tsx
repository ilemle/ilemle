
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
    children: React.ReactNode,
    style?: StyleProp<ViewStyle>
    statusBarHidden?: boolean,
}

export const Screen: React.FC<IScreenComponent> = (props: IScreenComponent): JSX.Element => {
    const {
        children,
        statusBarHidden = false,
    } = props

    const insets = useSafeAreaInsets()
    const { colors, theme } = useAppTheme()

    const isDark = theme === 'dark' ? 'light-content' : 'dark-content'

    return (
        <View
            style={[style.container, {
                backgroundColor: colors.Background.default,
                paddingTop: insets.top,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }]}
        >
            <StatusBar
                hidden={statusBarHidden} //полностью скрывает статус бар
                backgroundColor={colors.Background.default} // Android only
                networkActivityIndicatorVisible
                barStyle={isDark}
            // showHideTransition={'none'} // ios only 

            />

            {children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,

    }
})