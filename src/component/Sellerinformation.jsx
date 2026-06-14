import { carattribute } from '@/lib/carattribute';
import { sellerinform } from '@/lib/sellerinform';
import React from 'react'
import { FaRegStar } from 'react-icons/fa';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';

export default function Sellerinformation() {

  return (
    <>
      <div className='w-full h-auto py-8 lg:px-4'>
        <div className='w-full flex justify-center items-center  lg:w-full h-auto lg:flex lg:flex-row lg:justify-around lg:items-center lg:gap-4 lg:py-8'>
          <p className='text-black text-xl font-bold'>Seller Information</p>
             <span className='text-green-800' ><IoCheckmarkDoneCircleOutline size={30} strokeWidth={10} /></span>
         </div>
        {sellerinform.map((inform) => (
          <div key={inform.id} >
            <div className="w-full h-auto flex flex-col justify-center items-center gap-4 lg:flex-row lg:justify-center lg:items-center">
              <div className=' border border-black/5 py-8 px-8'>
                 <p className='text-blue-800 text-3xl font-medium'>{inform.sellername}</p>
                   <p className='text-black font-bold py-2'>Seller Performance</p>

                    <div className=' py-4'>
                    {/* Performance */}
                    <div className='w-full flex justify-center items-center gap-2 py-4 '>
                    <span className='text-green-800'><FaRegStar size={20} strokeWidth={4} /></span>
                      <p>Shipping Speed: {inform.shipping_speed}</p>
                   </div>

                   <div className='w-full flex justify-center items-center gap-4 py-4'>
                    <span className='text-green-800'><FaRegStar size={20} strokeWidth={4} /></span>
                      <p>Quality Score: {inform.quality_score}</p>
                   </div>

                   <div className='w-full flex justify-center items-center gap-2 py-4'>
                    <span className='text-green-800' ><FaRegStar size={20} strokeWidth={4} /></span>
                      <p>Customer Rating: {inform.rating}</p>
                   </div>
                    </div>
              </div>

              {/* List & rating */}
              <div className=' py-12 px-8 border border-black/5'>
                <div className='flex flex-col justify-center items-center gap-2 py-8 px-8 border border-black/5'>
                  <p className='font-bold text-3xl'>{inform.cars_listed}</p>
                  <p className='text-black/40 text-center'>Cars listed</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2 py-8 px-8 border border-black/5'>
                  <p className='font-bold text-3xl'>{inform.response_rate}</p>
                  <p className='text-black/40 text-center'>Response rate</p>
                </div>
              </div>

           
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
