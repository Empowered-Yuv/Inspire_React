import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const perstConfig ={
    key: 'root',
    storage,
}


//persisting the changes

const persistedReducer = persistReducer(perstConfig, todoReducer)

//object leta hai andar store
export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)