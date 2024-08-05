'use client'
import { SignUp, useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {
  const router = useRouter()
  const { isSignedIn } = useAuth()

  useEffect(() => {
    if (isSignedIn) {
      router.push('/Home')
    }
  }, [isSignedIn, router])
  return (
    <div className=" p-10 justify-center items-center flex">
      {' '}
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  )
}
