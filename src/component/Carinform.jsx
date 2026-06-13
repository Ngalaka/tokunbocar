import { carreason } from '@/lib/carreasons'
import React from 'react'

export default function Carinform() {
  
return (
  <>
    <div className='w-full h-auto px-4'>
      <div className='py-8' >
      <h1 className='font-bold text-2xl '>About This Car</h1>
      </div>
            {carreason.map((reason) => (
              <div key={reason.id} >
                <div>
                  <div>
                  <p>{reason.message}</p>
                  </div>

                  <div className='py-4'>
                  <p> Reason for sale: {reason.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  </>
)
}
