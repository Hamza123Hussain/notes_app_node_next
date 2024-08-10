import './globals.css'
import Providers from '@/Redux/Provider'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'react-hot-toast'
import CondtionalLayout from '@/components/CondtionalLayout'
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>NoteSecure - Your Personal Notes</title>
        <meta
          name="description"
          content="A simple, intuitive, and beautiful note-taking app."
        />
        <meta
          name="keywords"
          content="notes, note-taking, productivity, personal notes, digital notes"
        />
        <meta name="author" content="NoteSecure Team" />
        <meta property="og:title" content="NoteSecure - Your Personal Notes" />
        <meta
          property="og:description"
          content="A simple, intuitive, and beautiful note-taking app."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ClerkProvider>
          <Providers>
            <CondtionalLayout>{children}</CondtionalLayout>
          </Providers>
          <Toaster />
        </ClerkProvider>
      </body>
    </html>
  )
}
