import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { UserBtn } from '@/components/user-btn'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <nav className='w-full bg-indigo-200'>
            <header className='container mx-auto flex flex-row justify-between p-4'>
              <h1 className='text-xl font-bold'>
                Clerk Demo
              </h1>
              <SignedOut>
                <Button>
                  <SignInButton />
                </Button>
              </SignedOut>
              <SignedIn>
                  <UserBtn/>
              </SignedIn>
            </header>
          </nav>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}