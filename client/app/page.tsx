'use client'
import Loader from '@/components/Loader'
import CreateBTN from '@/components/Note/CreateBtn'
import Notecard from '@/components/Note/Notecard'
import SearchItem from '@/components/Note/SearchItem'
import { GetNotes } from '@/functions/GetNotes'
import { SetNote } from '@/Redux/NoteSlice'
import { RootState } from '@/Redux/Store'
import { Note } from '@/utils/NoteInterface'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const Dispatch = useDispatch()
  const { user, isLoaded } = useUser()
  const [loading, setLoading] = useState(true)
  const Notes = useSelector((state: any) => state.Note)
  const searchValue = useSelector((state: RootState) => state.search.flag)
  console.log(Notes)
  const getdata = async (email: any) => {
    if (email) {
      const data = await GetNotes(email)
      Dispatch(SetNote(data))
    }
    setLoading(false)
  }

  useEffect(() => {
    if (isLoaded && user) {
      getdata(user.primaryEmailAddress?.emailAddress)
    }
  }, [isLoaded, user])

  if (loading) return <Loader />

  if (searchValue) return <SearchItem />

  return (
    <div className="flex flex-col">
      <div className="mt-5 px-4 cursor-pointer">
        <CreateBTN />
      </div>
      <div className="grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-10 gap-6">
        {Notes.map((note: Note) => (
          <Notecard Note={note} key={note._id} />
        ))}
      </div>
    </div>
  )
}
