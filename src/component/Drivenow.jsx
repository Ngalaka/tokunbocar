 import Image from 'next/image'
import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

export default function Drivenow() {
  return (
    <>
     
        {/*  Section to add cars */}
        <div className="w-full py-2 md:h-1/2 lg:w-full h-auto lg:py-4">

          <div className="w-full flex-col justify-start items-start gap-4 py-2  lg:w-full h-auto bg-blue-900 flex lg:flex-row lg:justify-center lg:items-center lg:8">
            <div className="w-full lg:w-[60%] h-auto flex flex-col justify-center items-start gap-4 py-4 px-8 bg-blue-900">
              <h1 className="text-3xl font-bold text-white py-4 px-2">Drive Now, Pay Later</h1>
              <div className="w-full py-2 lg:w-[50%] h-auto lg:py-4 px-2">
                <p className="text-white/80 font-light text-sm">Get your dream car today and pay later with our flexible financing options.Low
                  deposit,easy monthly payments,no hidden charges pre-qualify in 2 minutes!
                </p>
              </div>

              <div>
                <button className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-full cursor-pointer transition-colors hover:bg-blue-700 border border-white flex justify-center items-center gap-2">
                  <p>Check Your Eligibility</p>
                  <span className="text-xl text-white font-normal ml-1"><MdOutlineArrowRightAlt /></span>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[40%] h-auto">
              <Image src="/image/indivialcar.jpeg" width={400} height={400} alt="Lagos used cars " className="w-full h-auto lg:w-full lg:h-67.5 object-cover" />
            </div>
          </div>
          </div>
    </>
  )
}
