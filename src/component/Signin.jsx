"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoCarSportOutline } from 'react-icons/io5';
export default function Signin() {
  const [loading, setLoading] = useState(false);
    // destructure useForm to get register, handleSubmit, errors, and reset functions
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      defaultValues: {
        email: "",
        password: "",
      },
    });
  
  
    const onSubmit = async (data) => {
      setLoading(true);
  
      try {
  
        console.log("Form Submitted Successfully", data);
  
        // Clear all form fields
        reset();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  return (
    <>
      <div className='w-full flex-col justify-center items-center  lg:w-[90%] lg:h-auto lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-16 lg:mx-auto'>
        {/* Car image */}
        <div className='w-full lg:w-[40%] h-auto'>
          <Image src="/image/carBg2.jpg" width={300} height={300} alt='Car logo' className='w-full h-auto  lg:w-full lg:h-[90vh] object-cover' />
        </div>


          {/*Car login form  */}
          <div className='w-full lg:w-[50%] h-auto'>
            <div className='w-full lg:w-50 h-auto flex flex-col justify-start items-start text-center py-4'>
              <h1 className='w-full font-bold text-2xl cursor-pointer py-2 px-12 '>LAGOS</h1>

              <div className='w-full h-auto flex justify-center items-center gap-4'>
                <span><IoCarSportOutline /></span>
                <span> Used Car</span>
              </div>
            </div>

              {/* form  */}
              <div className='py-8'>
                <h1 className='w-full text-3xl text-center lg:w-100 font-semibold lg:text-4xl text-blue-800 py-2 px-2'>Welcome Login to your account</h1>

                <form action="" onSubmit={handleSubmit(onSubmit)}>
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

                <div className='w-[90%] mx-auto lg:w-full lg:py-4 lg:mx-1'>
                <label className="block mb-2 font-medium">
                  Password
                </label>

                <input
                  type="password"
                   className="w-full p-2 h-auto lg:w-full border lg:p-3 rounded-lg"
                  {...register("password", {
                    required: "Password field is required",
                  })}
                />

                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              

              <div className="w-[90%] mx-auto flex-col justify-start items-start py-4 lg:py-2 lg:mx-1 lg:w-full flex lg:flex-row lg:justify-between lg:items-center lg:gap-2 ">
                <p>
                  I don't have an Account
                  <Link href="/signUp" className='px-2 text-blue-600  underline'>
                      Sign Up
                  </Link>
                   </p>
               
                <Link href="#" className='px-2 text-blue-600 py-4'>
                     Lost your password
                  </Link>
              </div>

              <div className=" w-[90%] mx-auto lg:w-full lg:py-4 lg:mx-1 flex flex-col justify-center items-center gap-2 py-4 ">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-auto p-2   lg:p-3 rounded-lg text-white lg:w-full lg:auto mx-auto   ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-900 hover:bg-blue-700"}`}
                >
                  {loading ? "Signing In..." : "Sign in Here"}
                </button>
              </div>

                </form>
              </div>

          </div>

      </div>
    </>
  )
}
