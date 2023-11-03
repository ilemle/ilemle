import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppThemeEnum } from "../../types/app"



interface appState {
    appTheme: AppThemeEnum
    appThemeUsedSystemTheme: boolean,
    layoutAnimationEnabled: boolean,
}

const initialState: appState = {
    appTheme: AppThemeEnum.dark,
    appThemeUsedSystemTheme: false,
    layoutAnimationEnabled: true,
}

export const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        changeAppTheme: (state: appState, { payload }: PayloadAction<AppThemeEnum>) => {
            state.appTheme = payload
        },
        changeAppIsUsedSystemTheme: (state: appState, { payload }: PayloadAction<boolean>) => {
            state.appThemeUsedSystemTheme = payload
        },
        changeLayoutAnimationEnabled: (state: appState) => {
            state.layoutAnimationEnabled = !state.layoutAnimationEnabled
        }
    }
})

export const { actions, reducer } = appSlice