import React, { useState } from "react";
import {
    StyleProp,
    StyleSheet,
    Switch,
    ViewStyle
} from "react-native";
import { Typography } from "./Typography";
import { useAppTheme } from "../../hooks";
import { LayoutAnimatedView } from "./LayoutAnimatedView";
import { enteringType } from "../../types/animationTypes";

interface ICustomSwitchProps {
    isEnabled: boolean,
    onValueChange: () => void,
    disabled?: boolean,
    description?: string,
    containerStyle?: StyleProp<ViewStyle>,
    animationEntering?: enteringType
}

export const CustomSwitch: React.FC<ICustomSwitchProps> = (props: ICustomSwitchProps): JSX.Element => {

    const {
        isEnabled = false,
        onValueChange,
        disabled = false,
        description = '',
        containerStyle,
        animationEntering,
    } = props

    const { colors } = useAppTheme()

    const [_isEnabled, setIsEnabled] = useState(isEnabled);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        onValueChange()
    }

    const thumbColor = disabled && !isEnabled ?
        colors.Switch.disableAndInactive : isEnabled ?
            colors.Switch.enableAndActive : colors.Switch.disable

    const trackColor = {
        false: colors.Switch.disableBackground,
        true: disabled ?
            colors.Switch.enable :
            colors.Switch.activeBackground
    }

    return (
        <LayoutAnimatedView
            entering={animationEntering}
            style={[styles.container, containerStyle]}
        >
            <Typography>
                {description}
            </Typography>
            <Switch
                trackColor={trackColor }
                thumbColor={thumbColor}
                disabled={disabled}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </LayoutAnimatedView>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});