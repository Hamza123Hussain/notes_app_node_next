import { SignedIn, SignInButton } from '@clerk/nextjs'
import Head from 'next/head'
import Link from 'next/link'

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

      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-4">
        <section className="w-full max-w-5xl mx-auto text-center py-20">
          <h2 className="text-5xl xs:text-2xl  font-bold text-white mb-6">
            Welcome to Note Secure
          </h2>
          <div className=" bg-green-400 rounded-lg p-2 text-white xs:text-xs w-[20vw]  mx-auto  flex justify-center items-center ">
            <SignInButton mode="modal" />
          </div>
          <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-500 mb-4">
                Take Notes
              </h3>
              <p className="text-gray-700">
                Easily take notes with our intuitive interface. Capture your
                thoughts quickly and efficiently.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-500 mb-4">
                Delete Notes
              </h3>
              <p className="text-gray-700">
                Remove notes you no longer need. Keep your workspace clean and
                organized.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-500 mb-4">
                Update Notes
              </h3>
              <p className="text-gray-700">
                Edit your notes at any time. Keep them up-to-date with the
                latest information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-500 mb-4">
                Change Note Color
              </h3>
              <p className="text-gray-700">
                Customize your notes with different colors. Highlight important
                information.
              </p>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}
