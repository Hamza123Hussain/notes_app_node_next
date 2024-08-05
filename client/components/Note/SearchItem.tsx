'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AlertCircle } from 'lucide-react'
import { AppDispatch, RootState } from '@/Redux/Store'
import { resetflag } from '@/Redux/SearchSlice'
import Notecard from './Notecard'
import { Note } from '@/utils/NoteInterface'
import { Reset } from '@/Redux/SearchItemSlice'

const SearchItem = () => {
  const notes = useSelector((state: RootState) => state.Searchitem)
  const dispatch: AppDispatch = useDispatch()

  return (
    <div>
      {notes.length > 0 ? (
        <div className=" flex flex-col justify-start ">
          <h1 className=" mt-10 text-2xl text-slate-700 text-center  ">
            Notes Found{' '}
          </h1>
          <div className="grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-10 gap-6">
            {notes.map((note: Note) => (
              <Notecard key={note._id} Note={note} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full mt-20">
          <AlertCircle size={48} className="text-red-600" />
          <h1 className="px-3 py-1 text-xl text-slate-400">No notes found</h1>
          <button
            onClick={() => {
              dispatch(resetflag()), dispatch(Reset())
            }}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Return to Home
          </button>
        </div>
      )}
    </div>
  )
}

export default SearchItem
