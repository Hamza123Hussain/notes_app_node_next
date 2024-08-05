'use client'
import { SearchNote } from '@/functions/Search'
import { Reset, setsearchitem } from '@/Redux/SearchItemSlice'
import { resetflag, setflag, setSearchTerm } from '@/Redux/SearchSlice'
import { AppDispatch, RootState } from '@/Redux/Store'
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SearchBar = () => {
  const searchValue = useSelector((state: RootState) => state.search.value)
  const dispatch: AppDispatch = useDispatch()

  const SearchItem = async () => {
    dispatch(setflag())
    dispatch(Reset())
    try {
      const data = await SearchNote(searchValue)
      if (data) {
        dispatch(setsearchitem(data))
      }
    } catch (error) {
      // Handle error
      console.error('Search error:', error)
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      SearchItem()
    }
  }

  if (searchValue === '') {
    dispatch(Reset())
    dispatch(resetflag())
  }

  return (
    <div className="bg-white rounded-xl px-2 flex items-center">
      <input
        type="search"
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        placeholder="Search For Notes By Title"
        className="p-2 border-none outline-none w-full md:w-[40vw]"
      />
      <Search onClick={SearchItem} size={20} className="ml-2 cursor-pointer" />
    </div>
  )
}

export default SearchBar
