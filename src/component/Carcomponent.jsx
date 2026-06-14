"use client"
import { carcomponent } from '@/lib/carcomponent'
import React from 'react'
import { BiAbacus, BiBrightnessHalf, BiColor } from 'react-icons/bi'
import { CiBoxes, CiCoffeeCup, CiKeyboard, CiPen } from 'react-icons/ci'
import { DiJoomla } from 'react-icons/di'

export default function Carcomponent() {
  return (
    <>
      <div className='w-full h-auto px-4'>
        {carcomponent.map((component) => (
          <div key={component.id} >
            <div className="w-full grid-cols-1 mx-auto gap-8 py-4 px-4 lg:w-full lg:h-auto grid lg:grid-cols-4 lg:gap-4 lg:py-8">

              <div className='w-full lg:w-37.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><BiAbacus size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>{component.year}</span>
                <span className='text-black/40'>Year</span>
              </div>

              <div className='w-full lg:w-37.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><BiBrightnessHalf size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>{component.mile}</span>
                <span className='text-black/40'>Mileage</span>
              </div >

              <div className='w-full lg:w-37.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><DiJoomla size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>{component.fuel}</span>
                <span className='text-black/40'>Fuel type</span>
              </div>

              <div className='w-full lg:w-37.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><CiBoxes size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>{component.engine}</span>
                <span className='text-black/40'>Engine</span>
              </div>

              <div className='w-full lg:w-37.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><CiCoffeeCup size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>{component.colour}</span>
                <span className='text-black/40'>Colour</span>
              </div>


              <div className='w-full lg:w-37.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><CiKeyboard size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>{component.door}</span>
                <span className='text-black/40'>Door</span>
              </div>


              <div className='w-full lg:w-37.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><CiPen size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>{component.seat}</span>
                <span className='text-black/40'>Seats</span>
              </div>


              <div className='w-full lg:w-35.5 h-auto py-2 px-4 flex flex-col justify-between items-center border border-black/20'>
                {/* car year */}
                <span className=' bg-blue-300 '><BiColor size={30} /></span>
                <span className='font-semibold text-blue-900 text-center'>{component.imported}</span>
                <span className='text-black/40'>Imported From</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
