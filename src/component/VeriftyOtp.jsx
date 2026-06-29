"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoCarSportOutline, IoEyeSharp } from 'react-icons/io5';
import { notifySuccess, notifyError, } from "@/lib/toast";

export default function VeriftyOtp() {
  // destructure useForm to get register, handleSubmit, errors, and reset functions
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const onSubmit = async (data) => {
    setLoading(true);

    try {

      console.log("Form Submitted Successfully", data);

      notifySuccess(
        // response.data.message ||
        "Login Successful"
      );
      //  Clear all form fields
      reset();

    } catch (error) {
      console.log(error);
      notifyError(
        // error.response?.data?.message ||
        "Login Failed"
      );
    }
  };
  return (
    <>
      <div className='w-full flex-col justify-center items-center  lg:w-[90%] lg:h-auto lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-16 lg:mx-auto'>
   
        {/*Car login form  */}
        <div className='w-full lg:w-[50%] h-auto shadow-md '>
          <div className='w-full lg:w-50 mx-auto h-auto flex flex-col justify-start items-start text-center py-2'>
            <h1 className='w-full font-bold text-2xl cursor-pointer py-2 px-12 '>LAGOS</h1>

            <div className='w-full h-auto flex justify-center items-center gap-4'>
              <span><IoCarSportOutline /></span>
              <span> Used Car</span>
            </div>
          </div>

          {/* form  */}
          <div className='py-8 w-[80%] mx-auto'>
            <h1 className='w-full text-2xl text-center lg:w-100 font-semibold lg:text-3xl lg:mx-auto text-blue-800 py-2 px-2'>Verify your opt</h1>

            <form action="" onSubmit={handleSubmit(onSubmit)}>

              <div className='w-[90%] py-2 mx-auto lg:w-full '>
                <label className=" block mb-2 font-medium">
                  Otp
                </label>

                <input
                  type="text" placeholder='enter your otp codes'
                  className="w-full p-2 h-auto lg:w-full border rounded-lg"
                  {...register("opt", {
                    required: "Otp field is required",
                  })}
                />

                {errors.opt && (
                  <p className="text-red-500 text-sm">
                    {errors.opt.message}
                  </p>
                )}
              </div>

              <div className='w-[90%] mx-auto lg:w-full lg:py-4 lg:mx-1'>
                <label className=" block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full p-2 h-auto lg:w-full border lg:p-3 rounded-lg"
                  {...register("email", {
                    required: "Email field is required",
                  })}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className=" w-[90%] mx-auto lg:w-full l  flex flex-col justify-center items-center gap-2 py-2 ">
                <button
                  type="submit"
                  className="w-full h-auto p-2 lg:p-2 rounded-lg text-white lg:w-full lg:auto mx-auto "
                >
                  Reset
                </button>
              </div>


              <div className="w-[90%] mx-auto flex-col justify-start items-start py-4 lg:py-2 lg:mx-1 lg:w-full flex lg:flex-row lg:justify-center lg:items-center lg:gap-2 ">
                <p>
                  Goback to login
                  <Link href="/sign-in" className='px-2 text-blue-600  underline'>
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>

        </div>

      </div>
    </>
  )
}
