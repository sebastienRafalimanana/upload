import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { vaccineContentManagerApi } from './api'

export const createStore = (
    options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
    configureStore({
        reducer: {
            [vaccineContentManagerApi.reducerPath]: vaccineContentManagerApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(vaccineContentManagerApi.middleware),
        ...options,
    })

export const store = createStore()
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
