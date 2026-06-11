import { carLogos } from '@/lib/carLogos'
import { typeCar } from '@/lib/typeCar'
import Image from 'next/image'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function FeatureCar() {
  return (
    <>
        {/* Browse Car by Brand */}

          <div className='w-full overflow-x-hidden h-auto md:w-1/2" lgw-full lg:h-auto'>

            {/* Browse Car by Brand */}
            {/* browse car by Type */}
            <div className="w-full h-auto flex flex-col justify-center items-center gap-2 py-6 md:w-1/2 lg:w-full lg:flex lg:flex-row lg:justify-between lg:items-center lg:px-16 lg:py-4">
              <div className="w-full h-auto flex flex-col justify-center items-center gap8 md:w-1/2 lg:w-full lg:flex lg:flex-row lg:justify-between lg:items-center lg:py-4">
                <p className="text-xl font-bold">Browse Car Types in Nigeria</p>
                <div className="flex flex-row items-center gap-2">
                  <p className="cursor-pointer">View all</p>
                  <span><IoIosArrowRoundForward /></span>
                </div>
              </div>
            </div>

            {/* types */}

            <div className="w-full h-auto flex flex-col justify-center items-center gap-12 md:w-1/2 lg:w-full lg:h-auto lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-4 lg:px-16 lg:py-2">
              {carLogos.map((logo) => (
                <div key={logo.id} >
                  <div className="w-50 h-30 border border-black/10 flex flex-col justify-center items-center gap-2 py-2 px-2">
                    <Image src={logo.logo} width={100} height={100} alt="Lagos used cars" className="w-20 h-20 object-cover" />
                    <p>{logo.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Browse Car by Type in Nigeria */}
          <div className="w-full md:w-1/2 lg:w-full h-auto mt-8">
            {/* browse car by Type */}
            <div className="w-full flex flex-row justify-between items-center px-16 py-4">
              <div className="w-full flex flex-row justify-between items-center  py-4">
                <p className="text-xl font-bold">Browse Car Types in Nigeria</p>
                <div className="flex flex-row items-center gap-2">
                  <p className="cursor-pointer">View all</p>
                  <span><IoIosArrowRoundForward /></span>
                </div>
              </div>
            </div>

            {/* types */}

            <div  className="w-full h-auto flex flex-col justify-center items-center gap-12 md:w-1/2 lg:w-full lg:h-auto lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-4 lg:px-16 lg:py-2">
              {typeCar.map((type) => (
                <div key={type.id} >
                  <div className="w-full h-40 text-center flex-row justify-center items-center gap-12  lg:w-50 lg:h-30 border border-black/10 lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-2 lg:py-2 px-2">
                    <Image src={type.logo} width={300} height={300} alt="Lagos used cars" className="w-40 h-auto lg:w-30 lg:h-30 object-cover" />
                    <p className='text-center'>{type.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        

    </>
  )
}
