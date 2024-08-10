import { DeleteNote } from '@/functions/DeleteNote'
import { Updateme } from '@/functions/Update_Description'
import { RemoveNote, UpdateNote } from '@/Redux/NoteSlice'
import { Note } from '@/utils/NoteInterface'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

const NoteBody = ({ Note }: { Note: Note }) => {
  const Dispatch = useDispatch()
  const DeleteMe = async () => {
    const Removed = await DeleteNote(Note._id)

    if (Removed) {
      Dispatch(RemoveNote(Note._id))
      toast.success('NOTE HAS BEEN DELETED')
    }
  }
  const dispatch = useDispatch()
  const [title, setitle] = useState(Note.title)
  const [description, setdescription] = useState(Note.description)
  const UpdateDescription = async () => {
    const Data = await Updateme(Note._id, title, description)
    if (Data) {
      dispatch(UpdateNote(Data))
      toast.success('DATA HAS BEEN UPDATED')
    }
  }
  return (
    <div className="p-4 bg-white flex flex-col justify-between space-y-4">
      <div className=" flex flex-col gap-2">
        <h5>Note Title</h5>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setitle(e.target.value)}
          className="w-full h-fit border border-gray-300 rounded-lg p-2 outline-none focus:border-blue-400"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <h5>Note Description</h5>
        <textarea
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          name="description"
          className="w-full h-fit border border-gray-300 rounded-lg p-2 outline-none focus:border-blue-400"
        />
      </div>
      <div className="flex justify-end items-center gap-5">
        {' '}
        <AiOutlineDelete
          onClick={DeleteMe}
          className=" text-red-500 cursor-pointer"
          size={30}
        />{' '}
        <button
          onClick={UpdateDescription}
          className=" bg-blue-500 px-5 py-2 rounded-lg"
        >
          Update Me{' '}
        </button>
      </div>
    </div>
  )
}

export default NoteBody
