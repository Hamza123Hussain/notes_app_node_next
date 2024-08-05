'use client'
import { setColor } from '@/Redux/SearchSlice'
import { colors } from '@/utils/ColorArray'
import React from 'react'
import { useDispatch } from 'react-redux'

const ColorScheme = () => {
  const dispatch = useDispatch()
  return (
    <div className="flex justify-around p-4">
      {colors.map((color) => (
        <div
          key={color}
          className="w-10 h-10 gap-2 opacity-100 rounded-full cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={() => dispatch(setColor(color))}
        ></div>
      ))}
    </div>
  )
}

export default ColorScheme
