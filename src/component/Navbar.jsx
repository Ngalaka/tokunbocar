"use client"
import Link from 'next/link'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoCarSportOutline } from 'react-icons/io5'
import { LuUsers } from 'react-icons/lu'
import { TiStarburstOutline } from 'react-icons/ti'
export default function Navbar() {
  return (
    <>
     {/* Nav Section */}
        <div className='w-full h-17.5 flex justify-between items-center gap-2 px-14'>

          {/* section for Logo */}
          <div>
            <div className='cursor-pointer'>
              <p>LAGOS</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <span><IoCarSportOutline /></span>
              <span className='text-sm'>Used Cars</span>
            </div>
          </div>

          {/* search section */}

          <div className='flex items-center'>
            <div>
              <input type="text" placeholder='search' className='border border-gray-300 outline-none w-80 pl-16 py-2 rounded-lg relative placeholder:text-sm' />
              <span className='absolute left-3/12 top-7 text-xl'><CiSearch /></span>
            </div>

            <div>
              <button className='bg-blue-900 w-20 py-2 text-white text-sm rounded-s-lg cursor-pointer'>search</button>
            </div>
          </div>


          {/* login section */}

          <div className='flex justify-between items-center gap-8 cursor-pointer '>
            <div className='flex items-center gap-2'>
              <span className='cursor-pointer'><TiStarburstOutline /></span>
              <p className='text-sm cursor-pointer py-2 '>Drive Now Pay Later</p>
            </div>

            <div className='flex items-center gap-2 cursor-pointer'>
               <Link href="/sign-in">
              <span className='cursor-pointer'> <LuUsers /></span>
               </Link>
               <Link href="/sign-up">
              <p className='text-sm cursor-pointer py-2  '>
                Login</p>
                </Link>
            </div>

{/* Theme Toggle Button */}
            
            <div>
              <button className='bg-blue-900 w-28 py-2  text-white text-sm cursor-pointer rounded-lg'>Sell Your Car</button>
            </div>
          </div>
        </div>
      


    </>
  )
}
