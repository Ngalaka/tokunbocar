import ActivePlan from '@/component/ActivePlan'
import Finance from '@/component/Finance'
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
                <div>
                    <Finance/>
                </div>

                <div>
                    <ActivePlan/>
                </div>
                
              </div>
            </div>
    </>
  )
}
