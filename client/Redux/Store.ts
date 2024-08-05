// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './SearchSlice'
import NoteReducer from './NoteSlice'
import SearchItemReducer from './SearchItemSlice'
const store = configureStore({
  reducer: {
    search: searchReducer,
    Note: NoteReducer,
    Searchitem: SearchItemReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
