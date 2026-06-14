import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Paylater() {
  const payment =[
    {
      id:1,
      car_price: 18500000,
     est_deposite:3700000,
    monthly_payment:248000,
    loan: 24,
    discountrate: 20
    }
  ]
  return (
    <>

<div className='w-full py-2 lg:w-full h-auto lg:py-8 lg:px-4'>
        {payment.map((pay) => (
          <div key={pay.id} >
            
      <div className='w-full h-auto bg-blue-950 text-white'>
        <h1 className='py-4 px-4 text-3xl font-bold '>Drive Now, Pay Later</h1>
        <p className='py-4 px-4 font-semibold text-white/60'>
          Spread The cost with flexible financing. Low deposite, fixed monthly
          payments, no hidder charges.
        </p>


        <div className='w-full h-auto bg-blue-900 py-4 px-4 m-auto rounded-lg'>
          <div className='flex justify-between items-center gap-4 px-2 py-4'>
            <p className='text-white/70'>Car price</p>
            <p>{pay.car_price}</p>
          </div>

          <div className='flex justify-between items-center gap-4 px-2 py-4'>
            <p className='text-white/70'>Est deposit{pay.discountrate}</p>
            <p >{ pay.est_deposite}</p>
          </div>


          <div className='flex justify-between items-center gap-4 px-2 py-4'>
            <p className='text-white/70'>Monthly payment</p>
            <p>{ pay.monthly_payment}/mo</p>
          </div>


          <div className='flex justify-between items-center gap-4 px-2 py-4'>
            <p className='text-white/70'>Loan term</p>
            <p>{pay.loan } months</p>
          </div>
        </div>

        <div className='w-full h-auto py-8 '>
          <button className='w-full gap-4 lg:w-[70%] h-auto b text-white bg-transparent mx-auto rounded-lg border border-white cursor-pointer py-4 px-4 text-xl font-semibold flex justify-center items-center lg:gap-8'>
            Check Eligibility
            <span><IoIosArrowRoundForward /></span>
          </button>
        </div>
      </div>



          </div>
        ))}
      </div>

























    </>
  )
}
