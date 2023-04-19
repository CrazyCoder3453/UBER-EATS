import React from 'react'
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
  return (
    <div className='flex justify-between'>
        <div className='flex sm:ml-6 md:ml-8 lg:ml-10 mt-10'>
            <MenuIcon className="mr-6"/>
            <Link href='/'>
                <Image 
                    className='cursor-pointer'
                    src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
                    alt="Uber-eats"
                    height={5}
                    width={150}
                />
            </Link>
        </div>
        <div className='ml-10 mr-10 mt-10'>
            <button className='text-black bg-white shadow-md p-2 rounded mr-8 hover:bg-slate-400'><PersonIcon />Log in</button>
            <button className='text-white bg-black shadow-md p-2 rounded hover:bg-slate-500'>Sign up</button>
        </div>
    </div>
  )
}

export default Header