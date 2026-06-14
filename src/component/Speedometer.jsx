import Image from 'next/image'
import React from 'react'

export default function Speedometer() {
  return (
    <>
      <div className="w-full h-auto bg-blue-900 py-2 lg:mt-8">

          <div className="w-full flex flex-row justify-center items-center px-4 py-4 lg:justify-between lg:items-center lg:px-16 lg:py-4">
            <h2 className="text-xl font-bold text-white">What Our Customers Say</h2>
            <p className="text-sm text-white py-2 px-4  cursor-pointer">view all videos </p>
          </div>

          {/* speedometer image */}
          <div className="w-full h-auto flex flex-col gap-8 py-8 lg:flex-row justify-center items-center lg:px-8 lg:py-2 lg:gap-4 text-white">
            <div>
              <Image src="/image/carspeedometer.jpeg" width={300} height={300} alt="Lagos used cars" className="w-full h-auto lg:h-30 object-cover" />
              <div className="w-full h-auto flex flex-col justify-center items-center gap-2 bg-blue-700">
                <p className="text-center text-sm text-white px-4 font-bold">How to spot a good Tokunbo Car in Lagos</p>
                <div className="flex flex-row items-center justify-center gap-2">
                  <span>21,0000</span>
                  <span className="text-sm text-white/80 font-light ml-2">views</span>
                  <span className="text-sm text-white/80 font-light ml-2">-</span>
                  <span className="text-sm text-white/80 font-light ml-2">2 months ago</span>
                </div>
              </div>
            </div>

            <div>
              <Image src="/image/carspeedometer.jpeg" width={300} height={300} alt="Lagos used cars" className="w-full h-auto lg:h-30 object-cover" />
              <div className="w-full h-auto flex flex-col justify-center items-center gap-2 bg-blue-700">
                <p className="text-center text-sm text-white  px-4 font-bold">How to spot a good Tokunbo Car in Lagos</p>
                <div className="flex flex-row items-center justify-center gap-2">
                  <span>21,0000</span>
                  <span className="text-sm text-white/80 font-light ml-2">views</span>
                  <span className="text-sm text-white/80 font-light ml-2">-</span>
                  <span className="text-sm text-white/80 font-light ml-2">2 months ago</span>
                </div>
              </div>
            </div>

            <div>
              <Image src="/image/carspeedometer.jpeg" width={300} height={300} alt="Lagos used cars" className="w-full h-auto lg:h-30 object-cover" />
              <div className="w-full h-auto flex flex-col justify-center items-center gap-2 bg-blue-700">
                <p className="text-center text-sm text-white  px-4">How to spot a good Tokunbo Car in Lagos</p>
                <div className="flex flex-row items-center justify-center gap-2">
                  <span>21,0000</span>
                  <span className="text-sm text-white/80 font-light ml-2">views</span>
                  <span className="text-sm text-white/80 font-light ml-2">-</span>
                  <span className="text-sm text-white/80 font-light ml-2">2 months ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}
