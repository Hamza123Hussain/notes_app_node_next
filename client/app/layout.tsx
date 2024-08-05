import Footer from '@/components/Footer'
import './globals.css'
import Navbar from '@/components/Navbar'
import Providers from '@/Redux/Provider'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'react-hot-toast'
import CondtionalLayout from '@/components/CondtionalLayout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
