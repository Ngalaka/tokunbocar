import Link from 'next/link'
import React from 'react'
import { FaUser } from 'react-icons/fa6'
import { IoCarSportOutline } from 'react-icons/io5'
import { LuUsers } from 'react-icons/lu'
import { TiStarburstOutline } from 'react-icons/ti'

export default function Navbar() {
  return (
    <>
      <div className='w-full flex-col justify-start items-start gap-4  lg:w-[90%] h-auto lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-4 lg:p-4  lg:mx-auto'>
        {/* Logo */}
        <div className='w-full py-4 px-4  flex flex-col justify-start items-start gap-1  lg:w-[20%]  h-auto lg:py-1 lg:px-1 lg:flex-col'>
          <p className=''><Link href="/" className='text-gray-700 hover:text-blue-600' >LAGOS</Link></p>
          <div className=' gap-4 cursor-pointer '>
            <Link
              href="/" className='flex flex-col justify-start items-start gap-2 lg:flex-row lg:justify-center lg:items-center lg:gap-4  text-gray-700 hover:text-blue-600'>
            <span><IoCarSportOutline /></span>
            <span className='text-sm'>Used Cars</span>
            </Link>

            
          </div>
        </div>

        {/* Search */}
        <div className='w-full py-4 justify-center items-center gap-16 px-8 lg:w-[25%] h-auto flex lg:flex-row lg:justify-center lg:items-center lg:gap-0'>
          <input type="text" placeholder='search' className='border border-gray-300 outline-none w-100 lg:w-50 lg:pl-16 py-2 rounded-lg placeholder:text-sm' />
          <button className='bg-blue-900 w-20 py-2 px-4 text-white text-sm rounded-s-lg cursor-pointer'>search</button>
        </div>

        {/* Drive Now */}
        <div className='w-full justify-center gap-2 px-4  mx-auto lg:w-[45%] h-auto flex  lg:justify-between lg:items-center lg:gap-2 '>
          <div className=' flex gap-4 justify-between items-center lg:gap-2'>
            <span className='cursor-pointer  text-gray-700 hover:text-blue-600'><TiStarburstOutline /></span>
            < button 
            className='text-sm cursor-pointer py-2  text-gray-700 hover:text-blue-600'>
                <Link href="/single-car"> Drive Now Pay Later</Link>
            </button>
          </div>

          {/* login */}
          <div className=''>
            <Link
              href="/sign-in"
              className="flex items-center  text-gray-700 hover:text-blue-600"
            >
              <span><FaUser size={20} /></span>
              <span className=' px-4 py-2'>Login</span>
            </Link>
          </div>
          {/* Toggle */}
          
        <div className='w-24 mx-auto'>
          <button className='w-full  bg-blue-900 py-2  text-white text-sm cursor-pointer rounded-lg'>
             <Link href="#">Sell Car</Link>
          </button>
        </div>
        </div>

        

      </div>
    </>
  )
}
