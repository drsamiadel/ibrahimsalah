import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import './globals.css'

const comfortaa = Comfortaa({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ibrahim Salah',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>{children}</body>
    </html>
  )
}
