import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppThemeEnum } from "../../types/app"
import { IProduct } from "../../types/artApiTypes"



interface appState {
    arts: IProduct[]
    artsIsLoading: boolean,
    artsError: string | null,
}

const initialState: appState = {
    arts: [],
    artsIsLoading: false,
    artsError: null,
}

export const artSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setArts: (state: appState, { payload }: PayloadAction<IProduct[]>) => {
            state.arts = payload
            state.artsIsLoading = false
            state.artsError = ''
        },
        setArtsIsLoading: (state: appState) => {
            state.artsIsLoading = true
        },
        setArtsError: (state: appState, { payload }: PayloadAction<string>) => {
            state.artsIsLoading = false
            state.artsError = payload
        }
    }
})

export const { actions, reducer } = artSlice