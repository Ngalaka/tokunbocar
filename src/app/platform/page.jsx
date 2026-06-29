"use client"
import CarDat from '@/component/CarDat'
import HistogramChart from '@/component/HistogramChart'
import Overview from '@/component/Overview'
import PendingAppro from '@/component/PendingAppro'
import Platform from '@/component/Platform'
import SideMenu from '@/component/SideMenu'
import React from 'react'

export default function page() {
  return (
    <>
      <div className='w-full min-h-screen flex'>
        {/* Side Bar */}
        <div className='w-[20%]'>
            <SideMenu/>
        </div>

        {/* Platfor page */}
        <div className='w-[70%] p-4' >

          <div className='w-full h-auto'>
               <Platform/>
          </div>
              {/* carData */}
            <div className='w-full h-auto py-16'>
               <CarDat/>
            </div>

            {/* chart information */}
           <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-start gap-6">
  {/* Histogram Chart */}
  <div className="w-full lg:w-[60%]">
    <HistogramChart />
    <PendingAppro/>
  </div>

  {/* Platform Overview */}
  <div className="w-full lg:w-[40%]">
    <Overview />
  </div>
</div>
        </div>
      </div>
    </>
  )
}
