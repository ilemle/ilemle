
import React from "react";
import { Text } from "react-native";

interface ITypographyProps {
    children?: string | never[]
}

export const Typography: React.FC<ITypographyProps> = (props: ITypographyProps): JSX.Element => {

    const { children = '' } = props

    return (
        <Text>
            {children}
        </Text>
    )

}
