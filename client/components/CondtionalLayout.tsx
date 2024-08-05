'use client'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useUser } from '@clerk/nextjs'
import LandingPage from './LandingPage'

const CondtionalLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser()
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {user ? (
        <>
          <Navbar />
          <div className="flex-1">{children}</div>
        </>
      ) : (
        <LandingPage />
      )}
      <Footer />
    </div>
  )
}

export default CondtionalLayout
