"use client"
import React from 'react'

export default function Listed() {
 const listeddetails =[
{
  id:1,
  listed: "2 days ago",
  listed_id: "#LUC-2026-00481",
  location: "Lekki Phase 1, Lagos",
  views: 342,
},
]
  return (
    <>
      <div className='w-full px-2 py-8 lg:w-full h-auto lg:px-4'>
              {listeddetails.map((listed) => (
                <div key={listed.id} >
                  <div className="w-full h-auto">
                    <div className='bg-white mx-4'>
            <h1 className='text-2xl font-bold px-8 py-4'>Listing details</h1>

            <div className='flex justify-between items-center gap-4 py-2 px-8 '>
              <p className='text-md text-black/40 text-center'>Listed</p>
              <p className='font-bold text-md'>{listed.listed}</p>
            </div>

            <div className='flex justify-between items-center gap-4  py-2 px-8 '>
              <p className='text-md text-black/40 text-center'>Listing ID</p>
              <p className='font-bold text-md'>{listed.listed_id}</p>
            </div>

            <div className='flex justify-between items-center gap-4  py-2 px-8 '>
              <p className='text-md text-black/40 text-center'>Location</p>
              <p className='font-bold text-md'>{listed.location}</p>
            </div>

            <div className='flex justify-between items-center gap-4  py-2 px-8 '>
              <p className='text-md text-black/40 text-center'>Views</p>
              <p className='font-bold text-md'>{listed.views} : people viewed this</p>
            </div>
            </div>
                  </div>
                </div>
              ))}
            </div>
    </>
  )
}
