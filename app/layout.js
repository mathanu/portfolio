import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mathan Portfolio',
  description: 'Mathan - Full Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <script async src="https://kit.fontawesome.com/e20sdfsd9.js" crossOrigin="anonymous"></script>
      <body className={inter.className }>{children}</body>
    </html>
  )
}
