import { Inter } from 'next/font/google'
import Banner from './components/Banner'
import Card from './components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Banner />
      <div className='flex justify-around h-12 w-16'>
        <Card 
          src='/images/img1.png'
          title='Feed your employees'
          description='Feed your employees quickly and easily'
        />
        {/* <Card 
          src='/images/img1.png'
          title='Feed your employees'
          description='Create a business account'
        />
        <Card 
          src='/images/img1.png'
          title='Feed your employees'
          description='Create a business account'
        />
        <Card 
          src='/images/img1.png'
          title='Feed your employees'
          description='Create a business account'
        /> */}
      </div>
    </div>
  )
}
