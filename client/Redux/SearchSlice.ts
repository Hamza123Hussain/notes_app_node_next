// src/redux/features/searchSlice.ts
import { SearchItem } from '@/utils/NoteInterface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: SearchItem = {
  value: '',
  flag: false,
  Color: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    setflag: (state) => {
      state.flag = true
    },
    resetflag: (state) => {
      state.flag = false
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.Color = action.payload
    },
  },
})

export const { setSearchTerm, setflag, resetflag, setColor } =
  searchSlice.actions
export default searchSlice.reducer
