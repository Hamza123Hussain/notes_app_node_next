'use client'
import React, { useState } from 'react'
import { Eye, Pencil } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Note } from '@/utils/NoteInterface'

const ViewBtn = ({ Note }: { Note: Note }) => {
  const [title, setitle] = useState(Note.title)
  const [description, setdescription] = useState(Note.description)

  return (
    <Dialog>
      <DialogTrigger>
        <Eye size={20} />
      </DialogTrigger>
      <DialogContent className=" bg-white">
        <DialogHeader>
          <DialogTitle>View Note</DialogTitle>
          <DialogDescription>
            <div className="p-4 bg-white flex flex-col justify-between space-y-4">
              <div className=" flex flex-col gap-2">
                <h5>Note Title</h5>
                <input
                  disabled
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
                  disabled
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  name="description"
                  className="w-full h-fit border border-gray-300 rounded-lg p-2 outline-none focus:border-blue-400"
                />
              </div>
              <div className="flex justify-end"></div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ViewBtn
