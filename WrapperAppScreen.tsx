import React from "react"
import { useActions, useTypedSelector } from "./src/hooks"
import { Appearance } from "react-native"

interface IWrapperAppScren {
    children: JSX.Element | null,
}

export const WrapperAppScren = (props: IWrapperAppScren): JSX.Element => {

    const { children } = props
    const { changeAppTheme } = useActions()
    const { appTheme } = useTypedSelector(state => state.app)

    

    return (
        <>
            {children}
        </>
    )

}