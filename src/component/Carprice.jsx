import { carattribute } from '@/lib/carattribute'
import { carprice } from '@/lib/carprice'
import React from 'react'

export default function Carprice() {
  return (
    <>
      <div>
        {/* Car price */}
        <div className='w-full h-auto px-4 py-4'>
          {carprice.map((details) => (
            <div key={details.id} >
              <div>
                {/* car year and name */}
                <div className='flex justify-start items-start gap-2 font-bold text-xl text-center'>
                  <span >{details.year}</span>
                  <span>{details.carname}</span>
                </div>

                <div className='flex justify-start items-start gap-16 py-4'>
                  <span className='font-bold text-2xl text-center'>{details.price}</span>
                  <span className=' text-sm text-center line-through'>{details.discount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Car attribute */}
        <div className='w-full h-auto '>
          {carattribute.map((attribute) => (
            <div key={attribute.id}  >
              <div className='w-full h-auto py-4 flex justify-between items-center gap-4 '>
                <p className='bg-gray-300 w-80 text-center p-2 text-black cursor-pointer '>{attribute.type}</p>
                <p className='bg-gray-300 w-80 text-center p-2 text-black cursor-pointer '>{attribute.pplstype}</p>
                <p className='bg-gray-300 w-80 text-center p-2 text-black cursor-pointer '>{attribute.model}</p>
                <p className='bg-gray-300 w-80 text-center p-2 text-black cursor-pointer '>{attribute.brand}</p>
                <p className='bg-gray-300 w-80 text-center p-2 text-black cursor-pointer '>{attribute.status}</p>
                <p className='bg-gray-300 w-80 text-center p-2 text-black cursor-pointer '>{attribute.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
