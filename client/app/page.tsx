'use client'
import Loader from '@/components/Loader'
import CreateBTN from '@/components/Note/CreateBtn'
import Notecard from '@/components/Note/Notecard'
import SearchItem from '@/components/Note/SearchItem'
import { GetNotes } from '@/functions/GetNotes'
import { SetNote } from '@/Redux/NoteSlice'
import { RootState } from '@/Redux/Store'
import { Note } from '@/utils/NoteInterface'
import { FaStickyNote } from 'react-icons/fa' // Import an icon from react-icons
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
      {Notes.length > 0 ? (
        <div className="grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-10 gap-6">
          {Notes.map((note: Note) => (
            <Notecard Note={note} key={note._id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <FaStickyNote className="text-blue-500 text-6xl mb-4" />
          <h2 className="text-gray-700 text-xl font-semibold">
            No notes available
          </h2>
          <p className="text-gray-500 mt-2  text-[12px] sm:text-base">
            Start by creating a new note to keep track of your ideas.
          </p>
        </div>
      )}
    </div>
  )
}
