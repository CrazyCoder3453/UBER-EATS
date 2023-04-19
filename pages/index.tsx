import { Inter } from 'next/font/google'
import Banner from './components/Banner'
import Card from './components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Banner />
      <div className='flex justify-around h-12 w-16'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
