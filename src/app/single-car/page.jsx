"use client"
import Carprice from '@/component/Carprice'
import Carreport from '@/component/Carreport'
import Sellerinformation from '@/component/Sellerinformation'
import Singlecarimage from '@/component/Singlecarimage'
import { FaRegStar } from "react-icons/fa6";
import React from 'react'
import Carinform from '@/component/Carinform';
import Carcomponent from '@/component/Carcomponent';
import Keyfeature from '@/component/Keyfeature';
import { DiBrackets, DiDatabase, DiYii } from 'react-icons/di';
import Listed from '@/component/Listed';
import Paylater from '@/component/Paylater';
import Similarcar from '@/component/Similarcar';
import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'

export default function page() {
  return (
    <>
    <div>
           <Navbar/>
        </div>
      <div className='w-full flex-col justify-center items-center lg:w-[95%] h-auto flex lg:flex-row lg:justify-center lg:items-center lg:gap-4 lg:mx-auto'>
        {/* Car informatiion */}
        <div className='w-full lg:w-[55%] h-auto'>
          <Singlecarimage />
          <Carprice />
          <Carcomponent />
          <Carinform />
          <Keyfeature />
        </div>

        {/* Car Instruction */}
        <div className='w-full lg:w-[44%] h-auto'>
          <Carreport />
          <Sellerinformation />

          {/* Buyer Protection */}

          <div className='w-[90%] mx-auto py-8  lg:w-full h-auto lg:py-12 lg:bg-gray-10'>
            <div className='bg-white px-8'>
              <h1 className='text-2xl font-bold'>Buyer Protection</h1>

              <div>
                {/* all buyer protection */}

                <div className='flex justify-between items-center gap-4 py-4 my-2 border border-black/10'>
                  <span className=' bg-blue-300 mx-8 '><DiDatabase size={30} /></span>
                  <div>
                    <p className='font-bold'>All transactions are plateform-managed</p>
                    <p className='text-sm text-center text-black/40 '>No direct money exchange outside lagosUsedCars</p>
                  </div>
                </div>

                <div className='flex justify-between items-center gap-4 py-2 my-2 border border-black/10'>
                  <span className=' bg-blue-300 mx-8  '><DiBrackets size={30} /></span>
                  <div>
                    <p className='font-bold'>All transactions are plateform-managed</p>
                    <p className='text-sm text-center text-black/40 '>No direct money exchange outside lagosUsedCars</p>
                  </div>
                </div>

                <div className='flex justify-between items-center gap-4 py-2 border border-black/10'>
                  <span className=' bg-blue-300 mx-8  '><DiYii size={30} /></span>
                  <div>
                    <p className='font-bold'>All transactions are plateform-managed</p>
                    <p className='text-sm text-center text-black/40'>No direct money exchange outside lagosUsedCars</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Listed />
          <Paylater />
        </div>
      </div>
      <div>
        <Similarcar />
      </div>
      <div>
         <Footer />
      </div>
    </>
  )
}
