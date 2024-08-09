'use client'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import UpdateBtn from './UpdateBtn'
import { Note } from '@/utils/NoteInterface'
import { DeleteNote } from '@/functions/DeleteNote'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { RemoveNote } from '@/Redux/NoteSlice'

const Notecard = ({ Note }: { Note: Note }) => {
  const Dispatch = useDispatch()
  const DeleteMe = async () => {
    const Removed = await DeleteNote(Note._id)

    if (Removed) {
      Dispatch(RemoveNote(Note._id))
      toast.success('NOTE HAS BEEN DELETED')
    }
  }
  return (
    <div
      style={{ backgroundColor: `${Note.BG}` }}
      className=" flex flex-col hover:shadow-sm hover:shadow-amber-900  justify-between  h-[30vh] bg-white border-2 border-slate-400  rounded-2xl "
    >
      <div>
        <h1 className=" px-3 py-1 text-xl text-slate-400">{Note.title}</h1>
        <h3 className=" px-4 text-slate-800">{Note.description}</h3>
      </div>
      <div className=" flex justify-end p-2 gap-3 items-center">
        <UpdateBtn Note={Note} />
        <AiOutlineDelete
          onClick={DeleteMe}
          className=" text-red-500 cursor-pointer"
          size={20}
        />{' '}
      </div>
    </div>
  )
}

export default Notecard
