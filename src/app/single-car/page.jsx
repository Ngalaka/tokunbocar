import Carprice from '@/component/Carprice'
import Carreport from '@/component/Carreport'
import Sellerinformation from '@/component/Sellerinformation'
import Singlecarimage from '@/component/Singlecarimage'
import { FaRegStar } from "react-icons/fa6";
import React from 'react'
import Carinform from '@/component/Carinform';

export default function page() {
  return (
    <>
      <div className='w-[95%] h-auto flex justify-center items-center gap-4 mx-auto'>
        {/* Car informatiion */}
        <div className='w-[55%] h-auto'>
          <Singlecarimage/>
          <Carprice/>
           <Carinform/>
        </div>

        {/* Car Instruction */}
        <div className='w-[44%] h-auto'>
          <Carreport/>
          <Sellerinformation/>
         
        </div>


      </div>
    </>
  )
}
