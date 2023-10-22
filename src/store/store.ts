import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { appSlice  } from './app/app.slice'

const reducers = combineReducers({
  app: appSlice.reducer
})

export const store = configureStore({
  reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
