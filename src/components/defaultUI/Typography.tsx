
import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { useAppTheme } from "../../hooks";

interface ITypographyProps {
    children?: string | string[] | never[] | undefined
    style?: StyleProp<TextStyle>
}

export const Typography: React.FC<ITypographyProps> = (props: ITypographyProps): JSX.Element => {

    const {
        children = '',
        style
    } = props

    const { colors } = useAppTheme()

    return (
        <Text style={[{ color: colors.text.default }, style]}>
            {children}
        </Text>
    )

}
