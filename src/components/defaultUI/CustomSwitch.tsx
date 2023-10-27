import React, { useState } from "react";
import {
    StyleProp,
    StyleSheet,
    Switch,
    View,
    ViewProps,
    ViewStyle
} from "react-native";
import { Typography } from "./Typography";
import { useAppTheme } from "../../hooks";

interface ICustomSwitchProps {
    isEnabled: boolean,
    onValueChange: () => void,
    disabled?: boolean,
    description?: string,
    containerStyle?: StyleProp<ViewStyle>,
}

export const CustomSwitch: React.FC<ICustomSwitchProps> = (props: ICustomSwitchProps): JSX.Element => {

    const {
        isEnabled = false,
        onValueChange,
        disabled,
        description,
        containerStyle,
    } = props

    const { colors } = useAppTheme()

    const [_isEnabled, setIsEnabled] = useState(isEnabled);
    const toggleSwitch = () => {
        onValueChange()
        setIsEnabled(previousState => !previousState);
    }

    return (
        <View style={[styles.container, containerStyle]}>
            <Typography>
                {description}
            </Typography>
            <Switch
                trackColor={{ false: colors.switch.disableBackground, true: colors.switch.activeBackground }}
                thumbColor={isEnabled ? colors.switch.active : colors.switch.disable}
                disabled={disabled}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});