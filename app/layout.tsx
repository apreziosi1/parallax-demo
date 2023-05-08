import './globals.css'
import { Poppins } from 'next/font/google'
import "@fontsource/orbitron"

const poppins = Poppins({ weight: ['400'], subsets: ['latin'] })

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
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
