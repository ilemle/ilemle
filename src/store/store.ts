import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import { appSlice } from './app/app.slice'
import { artSlice } from './arts/arts.slice'

const rootReducer = combineReducers({
  app: appSlice.reducer,
  arts: artSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
