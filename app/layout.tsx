import './globals.css'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'] })

export const metadata = {
  title: 'Labwm - Parallax Demo',
  description: 'Parallax demo page created with Nextjs and React Scroll Parallax',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>{children}</body>
    </html>
  )
}
