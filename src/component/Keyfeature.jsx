"use client"
import React from 'react'
import { TbPointFilled } from "react-icons/tb";

export default function Keyfeature() {
   const keyfeature = [
  {
    id: 1,
    key1: "Push-start ignition",
    key2: "Reverse Camera",
    key3: "Blind spot monitoring",
    key4: "Heated front seat",
    key5: "Adaptive cruise",
    key6: "Pre-collision warning",
    key7: "Apple Carplay/Android Auto",
    key8: "Lane departure",
    key9: "Duai-zone climate control",
    key10: "Souroof/moonroof",
    key11: "18-inch alloy wheels",
    key12: "Leather seat",

  },
];
  return (
    <>
      <div className='w-full h-auto py-2 px-2 lg:py-4 lg:px-4'>
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
