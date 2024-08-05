'use client'
import React, { useState } from 'react'
import { Pencil } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Note } from '@/utils/NoteInterface'
import { Updateme } from '@/functions/Update_Description'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { UpdateNote } from '@/Redux/NoteSlice'

const UpdateBtn = ({ Note }: { Note: Note }) => {
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
    <Dialog>
      <DialogTrigger>
        <Pencil size={20} className="text-blue-400" />
      </DialogTrigger>
      <DialogContent className=" bg-white">
        <DialogHeader>
          <DialogTitle>Update Note</DialogTitle>
          <DialogDescription>
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
              <div className="flex justify-end">
                <button
                  disabled={title === ''}
                  onClick={UpdateDescription}
                  className={`${title === '' ? 'bg-blue-100' : 'bg-blue-700'}
                   rounded-lg px-4 py-2 text-white"
                  `}
                >
                  Save
                </button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default UpdateBtn
