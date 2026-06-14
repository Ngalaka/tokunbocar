import React from 'react'
export default function Carreport() {
  return (
    <>
    {/* Car Report */}
      <div className='w-full h-auto flex flex-col justify-center items-center gap-4 space-y-1'>
        <button className='w-[70%] lg:w-[80%] h-auto bg-blue-950 py-2 px-4 text-white cursor-pointer text-center rounded-lg font-semibold'>Generate Report</button>
        <button className='w-[70%] lg:w-[80%] h-auto bg-gray-400 py-2 px-4 text-blue-900 cursor-pointer text-center rounded-lg font-semibold'>Generate Report</button>
        <button className='w-[70%] lg:w-[80%] h-auto bg-blue-500 py-2 px-4 text-white cursor-pointer text-center rounded-lg font-semibold'>Generate Report</button>
        <button className='w-[70%] lg:w-[80%] h-auto bg-green-900 py-2 px-4 text-white cursor-pointer text-center rounded-lg font-semibold'>Generate Report</button>
      </div>
    </>
  )
}
