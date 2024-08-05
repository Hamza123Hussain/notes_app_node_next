import { Note } from '@/utils/NoteInterface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the initial state as an array of Note
const initialState: Note[] = []

// Create the product slice
const productSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    AddNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload)
    },
    UpdateNote: (state, action: PayloadAction<Note>) => {
      const index = state.findIndex(
        (product) => product._id === action.payload._id
      )
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    RemoveNote: (state, action: PayloadAction<any>) => {
      return state.filter((product) => product._id !== action.payload)
    },
    SetNote: (state, action: PayloadAction<Note[]>) => {
      return action.payload
    },
  },
})

// Export the actions
export const { AddNote, UpdateNote, RemoveNote, SetNote } = productSlice.actions

// Export the reducer
export default productSlice.reducer
