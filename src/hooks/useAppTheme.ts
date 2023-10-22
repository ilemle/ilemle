
import { useColorScheme } from "react-native";
import { colors as _colors } from "../colors/colors";
import { AppThemeEnum } from "../types/app";
import { useActions } from "./useActions";
import { useTypedSelector } from "./useTypedSelector";

export const useAppTheme = () => {
    console.log('useAppTheme custom hook is used 🟣');

    const { appTheme } = useTypedSelector((state) => state.app)


    const colors = _colors[appTheme]


    return { colors }
}