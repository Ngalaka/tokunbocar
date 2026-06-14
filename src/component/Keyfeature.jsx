"use client"
import { keyfeature } from '@/lib/keyfeature'
import React from 'react'
import { TbPointFilled } from "react-icons/tb";

export default function Keyfeature() {
  return (
    <>
      <div className='w-full h-auto py-4 px-4'>
        <h1 className='font-bold text-2xl'>Key feature</h1>
        {keyfeature.map((key) => (
          <div key={key.id} >
            <div className="w-full h-auto flex justify-start items-start gap-8 py-8 ">

              <div >
                <ul className='space-y-4'>
                  <li>{key.key1}</li>
                  <li>{key.key2}</li>
                  <li>{key.key3} </li>
                  <li>{key.key4}</li>
                  <li>{key.key5}</li>
                  <li>{key.key6}</li>
                </ul>
              </div>

              <div>
                <ul className='space-y-4'>
                  <li>{key.key7}</li>
                  <li>{key.key8}</li>
                  <li>{key.key9}</li>
                  <li>{key.key10}</li>
                  <li>{key.key11}</li>
                  <li>{key.key12}</li>
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  )
}
