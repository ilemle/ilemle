
import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { useAppTheme } from "../../hooks";

interface ITypographyProps {
    children?: React.ReactNode
    style?: StyleProp<TextStyle>
    textColorInverted?: boolean
}

export const Typography: React.FC<ITypographyProps> = (props: ITypographyProps): JSX.Element => {

    const {
        children = '',
        style,
        textColorInverted,
    } = props

    const { colors } = useAppTheme()

    const textColor = textColorInverted ? colors.Text.inverted : colors.Text.default

    return (
        <Text style={[{ color: textColor }, style]}>
            {children}
        </Text>
    )

}
