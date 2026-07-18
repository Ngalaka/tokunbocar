
import React from 'react'
export default function Carinform() {
   const carreason = [
    {
      id: 1,
      message: ` This 2021 Toyota Camry SE is a clean, well-maintained tokunbo
                  vehicle imported directly from the United States, Never involved in
                  any accident.All original factory parts intact.Ac blows ice cold
                  push-start ignition, reverse camera, and full android/Apple Carplay.
                  Available for inspection in lekki Phase 1 by appointment` ,

    reason: ` owner relocation , price is slightly negotiable for 
                  serious buyer only`,
},
  ];
  
return (
  <>
    <div className='w-[90%] mx-auto py-2 lg:py-8 lg:w-full h-auto lg:px-4'>
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
