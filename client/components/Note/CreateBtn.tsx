'use client'
import React, { useState } from 'react'
import { CirclePlus, Pencil } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useUser } from '@clerk/nextjs'
import { CreateNote } from '@/functions/CreateNote'
import { useDispatch, useSelector } from 'react-redux'
import { AddNote } from '@/Redux/NoteSlice'
import { showSuccessToast } from '@/functions/SuccessToast'
import ColorScheme from './ColorSchem'
import { RootState } from '@/Redux/Store'

const CreateBTN = () => {
  const { user, isLoaded } = useUser()
  const Dispatch = useDispatch()
  const [inputvalues, setvalues] = useState({ title: '', description: '' })
  const HandleChange = (e: any) => {
    setvalues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const Create = async () => {
    if (user && isLoaded) {
      const Data = await CreateNote(
        user?.primaryEmailAddress?.emailAddress,
        inputvalues.title,
        inputvalues.description,
        BG
      )
      if (Data) {
        Dispatch(AddNote(Data))
        showSuccessToast()
      }
    }
  }
  const BG = useSelector((state: RootState) => state.search.Color)
  return (
    <Dialog>
      <DialogTrigger>
        <div className=" flex gap-2 items-center">
          <CirclePlus size={50} className="text-blue-400" />
          <h1 className="text-2xl text-slate-500">Add a new Note</h1>
        </div>
      </DialogTrigger>
      <DialogContent
        className=" bg-slate-300"
        style={{ backgroundColor: `${BG}` }}
      >
        <DialogHeader>
          <DialogTitle>Create New Note</DialogTitle>
          <DialogDescription>
            <div className="p-4 flex flex-col justify-between space-y-4">
              <div className=" flex flex-col gap-2">
                <h5>Note Title</h5>
                <input
                  type="text"
                  name="title"
                  value={inputvalues.title}
                  onChange={(e) => HandleChange(e)}
                  className="w-full h-fit border border-gray-300 rounded-lg p-2 outline-none focus:border-blue-400"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <h5>Note Description</h5>
                <textarea
                  onChange={(e) => HandleChange(e)}
                  name="description"
                  value={inputvalues.description}
                  className="w-full h-fit border border-gray-300 rounded-lg p-2 outline-none focus:border-blue-400"
                />
              </div>
              <div className="flex flex-col justify-between">
                <ColorScheme />
                <button
                  onClick={Create}
                  disabled={inputvalues.title === ''}
                  className={`${
                    inputvalues.title === '' ? 'bg-blue-100' : 'bg-blue-700 '
                  } rounded-lg py-2  text-white`}
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

export default CreateBTN
