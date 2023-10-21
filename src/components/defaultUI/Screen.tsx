
import React from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleProp,
    StyleSheet,
    ViewStyle
} from "react-native";
import { useTheme } from "../../hooks";


// export type Constructor<T> = new (...args: any[]) => T;
interface IScreenComponent {
    children: JSX.Element | null,
    style?: StyleProp<ViewStyle>
    statusBarIsVisible?: boolean,

}

export const Screen: React.FC<IScreenComponent> = (props: IScreenComponent): JSX.Element => {
    const { children, statusBarIsVisible } = props

    const colors = useTheme()

    return (
        <SafeAreaView style={[style.container, { backgroundColor: colors.primary }]}>
            {
                statusBarIsVisible &&
                <StatusBar
                    hidden={true}
                    barStyle={'dark-content'}
                    backgroundColor={'red'}
                />
            }
            {children}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
})