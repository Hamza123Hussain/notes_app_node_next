'use client'
import React from 'react'
import { Note } from '@/utils/NoteInterface'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import NoteTrigger from './NoteTrigger'
import NoteBody from './NoteBody'

const Notecard = ({ Note }: { Note: Note }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <NoteTrigger Note={Note} />
      </DialogTrigger>
      <DialogContent className=" bg-white">
        <DialogHeader>
          <DialogTitle>Update Note</DialogTitle>
          <DialogDescription>
            <NoteBody Note={Note} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Notecard
