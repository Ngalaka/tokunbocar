"use client"
import React, { useState } from 'react'
import BuyerSignUp from '@/component/BuyerSignUp'
import SellerSignUp from '@/component/SellerSignUp'
import Admin from '@/component/Admin';
export default function page() {
  const [userRole, setUserRole] = useState("buyerRole");

  // function for buyer sign up

  const buyerRole = () => {
    setUserRole("buyerRole")
  }


  // function for buyer sign up

  const sellerRole = () => {
    setUserRole("sellerRole")
  }


  // function for buyer sign up

  const adminRole = () => {
    setUserRole("adminRole")
  }

  return (
    <>
      <div>
        {/* user sign up roles */}
        <div className='w-full h-auto lg:w-full mx-auto py-4 shadow-md'>
          <div className='full h-auto mx-auto text-center py-4 '>
            <h1 className="text-2xl font-semibold text-blue-800">
              Tokunbo Car Sign up
            </h1>
          </div>
          <div className='w-[90%] lg:w-[60%]  h-auto mx-auto flex flex-row justify-center items-center gap-2'>
            {/* buyer role */}
            <div className='w-40 h-auto'> 
              <button
                onClick={buyerRole}
                className="bg-blue-900 text-white px-4 py-4 rounded w-full h-full cursor-pointer">Buyer </button>
            </div>


            {/* seller Role */}
            <div className='w-40 h-auto'>
              <button
                onClick={sellerRole}
                className="bg-blue-900 text-white px-4 py-4 rounded w-full h-full cursor-pointer">Seller </button>
            </div>

            {/* admin Role */}
            <div className='w-40 h-auto'>
              <button
                onClick={adminRole}
                className="bg-blue-900 text-white px-4 py-4 rounded w-full h-full cursor-pointer">Admin </button>
            </div>
          </div>

        </div>

        {/* using condition to chect the user role */}
        {userRole === "buyerRole" && <BuyerSignUp />}
        {userRole === "sellerRole" && <SellerSignUp/>}
         {userRole === "adminRole" && <Admin/>}

      </div>
    </>
  )
}
