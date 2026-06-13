import { carVarities } from '@/lib/carVarities'
import { singlecar } from '@/lib/singlecar'
import Image from 'next/image'
import React from 'react'

export default function Singlecarimage() {
  return (
    <>
    <div>
      <div className='w-full h-auto px-4'>
        {singlecar.map((single) => (
          <div key={single.id} >
            <div className="w-full h-auto  flex flex-col justify-start items-start gap-2">
              <Image src={single.image} width={400} height={400} alt="Lagos used cars" className="w-[600px] h-[600px] object-cover" />
            </div>
          </div>
        ))}
      </div>



      <div className='w-full h-auto flex justify-start items-center gap-4 px-4'>
        {carVarities.map((list) => (
          <div key={list.id}  >
            <div className='w-30 h-auto py-4 '>
              <Image src={list.image} width={300} height={300} alt="Lagos used cars" className="w-full h-20 object-cover " />
            </div>
            </div>
        ))}
      </div>

</div>
    </>
  )
}
