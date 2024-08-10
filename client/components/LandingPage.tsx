import { SignedIn, SignInButton } from '@clerk/nextjs'
import Head from 'next/head'
import { FaEdit, FaTrashAlt, FaPenFancy, FaPalette } from 'react-icons/fa'

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>NoteSecure - Your Personal Notes</title>
        <meta
          name="description"
          content="A simple, intuitive, and beautiful note-taking app."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-teal-400 p-6">
        {/* Hero Section */}
        <section className="w-full max-w-4xl mx-auto text-center py-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Welcome to NoteSecure
          </h2>
          <div className="bg-white rounded-full py-3 px-6 text-blue-500 font-semibold text-lg shadow-lg inline-flex items-center space-x-2 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out">
            <SignInButton mode="modal" />
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-0 pt-0">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center border border-gray-200">
            <FaPenFancy className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Take Notes
            </h3>
            <p className="text-gray-700">
              Easily take notes with our intuitive interface. Capture your
              thoughts quickly and efficiently.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center border border-gray-200">
            <FaTrashAlt className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Delete Notes
            </h3>
            <p className="text-gray-700">
              Remove notes you no longer need. Keep your workspace clean and
              organized.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center border border-gray-200">
            <FaEdit className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Update Notes
            </h3>
            <p className="text-gray-700">
              Edit your notes at any time. Keep them up-to-date with the latest
              information.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center border border-gray-200">
            <FaPalette className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Change Note Color
            </h3>
            <p className="text-gray-700">
              Customize your notes with different colors. Highlight important
              information.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
