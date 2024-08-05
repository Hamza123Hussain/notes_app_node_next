import { Note } from '@/utils/NoteInterface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the initial state as an array of Note
const initialState: Note[] = []

// Create the product slice
const Searchitemslice = createSlice({
  name: 'SearchItem',
  initialState,
  reducers: {
    setsearchitem: (state, action: PayloadAction<Note[]>) => {
      return action.payload
    },
    Reset: (state) => {
      return []
    },
  },
})

// Export the actions
export const { setsearchitem, Reset } = Searchitemslice.actions

// Export the reducer
export default Searchitemslice.reducer
