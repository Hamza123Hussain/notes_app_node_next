// components/Footer.tsx

import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between bg-slate-100 shadow-md shadow-indigo-100 p-2">
      <div className="container mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-900">
            © 2024 NoteSecure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
