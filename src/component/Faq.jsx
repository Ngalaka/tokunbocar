"use client"
import { faq } from '@/lib/faq'
import React, { useState } from 'react'

export default function Faq() {
  // initialize use state

  const [activeId, setActiveId] = useState(null)
  // fuction to toggle id with button

  const toggleButton = (id) =>{
    setActiveId(activeId === id? null : id)
  }
  return (
    <>
      <div className='w-full h-auto m-auto'>
        <div className='w-full h-auto lg:w-225 lg:h-auto lg:mx-auto lg:shadow-md lg:px-2 lg:py-2'>
          <div className='w-full h-auto py-4'>
          <h2 className="text-2xl font-semibold text-center text-blue-900 ">Frequently Asked Questions</h2>
          </div>
           <div className="w-[90%] h-auto space-y-2 py-2 px-2 mx-auto lg:space-y-4 lg:w-150 lg:h-auto lg:py-4 lg:px-4 lg:m-auto">
          {faq.map((question) => (
            <div
              key={question.id} className="border overflow-hidden ">
               <button 
                onClick={() => toggleButton(question.id)}
                className="w-full h-auto flex justify-between items-center px-4 py-2"
              >
                <span className=" font-semibold">{question.question}</span>
                <span className=' w-10 h-auto bg-gray-400 text-white p-2 font-bold cursor-pointer'>{activeId === question.id ? "-" : "+"}</span>
               
              </button>

              {activeId === question.id && (
                <div className="p-4 bg-white"><p>{question.answer}</p></div>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  )
}
