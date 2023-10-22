import { createSlice } from "@reduxjs/toolkit"
import { AppThemeEnum } from "../../types/app"



interface appState {
    appTheme: AppThemeEnum
    appThemeUsedSystemTheme: boolean,
}

const initialState: appState = {
    appTheme: AppThemeEnum.dark,
    appThemeUsedSystemTheme: true,
}

export const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        changeAppTheme: (state: appState, { payload }) => {
            state.appTheme = payload
        },
        changeAppIsUsedSystemTheme: (state: appState, { payload }) => {
            state.appThemeUsedSystemTheme = payload
        }
    }
})

export const { actions, reducer } = appSlice