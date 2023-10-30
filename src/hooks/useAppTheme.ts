
import { colors as _colors } from "../assets/colors/colors";
import { Alert, useColorScheme } from "react-native";
import { useTypedSelector } from "./useTypedSelector";
import { useMemo } from "react";

export const useAppTheme = () => {

    const systemColorScheme = useColorScheme() || 'light'

    const { appTheme: theme, appThemeUsedSystemTheme } = useTypedSelector(state => state.app)

    const _theme = appThemeUsedSystemTheme ? systemColorScheme : theme

    // const colors = useMemo(() => {
    //     return _colors[_theme]
    // }, [systemColorScheme, appThemeUsedSystemTheme, theme])
    const colors = _colors[_theme]

    return {
        colors,
        theme: _theme
    }
}