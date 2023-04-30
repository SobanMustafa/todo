import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/Main.jsx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Main/>
    </div>
  )
}
