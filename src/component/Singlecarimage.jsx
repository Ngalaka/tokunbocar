import { carVarities } from '@/lib/carVarities'
import { singlecar } from '@/lib/singlecar'
import Image from 'next/image'
import React from 'react'

export default function Singlecarimage() {
  return (
    <>
    <div>
      <div className='w-full py-2 lg:w-full h-auto lg:py-4 lg:px-4'>
        {singlecar.map((single) => (
          <div key={single.id} >
            <div className="w-full h-auto  flex flex-col justify-start items-start gap-2">
              <Image src={single.image} width={300} height={300} alt="Lagos used cars" className="w-full h-full lg:w-150 lg:h-150 object-cover" />
            </div>
          </div>
        ))}
      </div>



      <div className='w-full h-auto flex flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-center lg:gap-4 lg:px-4'>
        {carVarities.map((list) => (
          <div key={list.id}  >
            <div className='w-60 py-2 lg:w-30 h-auto lg:py-4 '>
              <Image src={list.image} width={300} height={300} alt="Lagos used cars" className="w-full h-auto lg:h-20 object-cover " />
            </div>
            </div>
        ))}
      </div>

</div>
    </>
  )
}
