// src/components/Navbar.tsx
'use client'
import React from 'react'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'
import SearchBar from './SearchBar'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/Redux/Store'
import { resetflag } from '@/Redux/SearchSlice'

const Navbar = () => {
  const { user } = useUser()
  const dispatch: AppDispatch = useDispatch()

  return (
    <div className="flex flex-col md:flex-row justify-between bg-slate-100 shadow-md shadow-indigo-100 p-2">
      <div className="flex justify-between items-center mb-5 md:mb-0 gap-10">
        <div className="text-3xl text-indigo-600 cursor-pointer">
          <h1 onClick={() => dispatch(resetflag())}>NoteSecure</h1>
        </div>
        <div className="flex items-center">
          {user ? (
            <div className="flex items-center gap-2 flex-col md:flex-row">
              <h5 className="text-xs md:text-base">{user?.fullName}</h5>
              <UserButton />
            </div>
          ) : (
            <Link
              href="/sign-up"
              className="bg-green-400 rounded-lg py-1 px-6 text-center"
            >
              Login
            </Link>
          )}
        </div>
      </div>{' '}
      <SearchBar />
    </div>
  )
}

export default Navbar
