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
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
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