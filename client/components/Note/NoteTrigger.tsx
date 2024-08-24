import { Note } from '@/utils/NoteInterface'
import React from 'react'

const NoteTrigger = ({ Note }: { Note: Note }) => {
  return (
    <div
      style={{ backgroundColor: `${Note.BG}` }}
      className=" flex flex-col hover:shadow-sm hover:shadow-amber-900 justify-start h-[30vh] bg-white border-2 border-slate-400  rounded-2xl items-start "
    >
      <h1 className=" py-1 px-2 text-xl text-slate-400">{Note.title}</h1>
      <h3 className=" px-5 text-slate-800 text-justify ">{Note.description}</h3>
    </div>
  )
}

export default NoteTrigger
