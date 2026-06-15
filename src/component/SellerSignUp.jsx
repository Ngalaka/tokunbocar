
"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoCarSportOutline } from 'react-icons/io5';

export default function SellerSignUp() {
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
      <div  className="w-full  lg:w-full h-auto  lg:mx-auto lg: p-6">
        {/*Seller Sign  */}
        <div className="w-full h-auto shadow-md  bg-white  lg:w-200 lg:h-full m-auto lg:shadow-xl ">
          <div className='w-full lg:w-50 mx-auto h-auto flex flex-col justify-start items-start text-center py-4'>
            <h1 className='w-full font-bold text-2xl cursor-pointer py-2 px-12 '>LAGOS</h1>

            <div className='w-full h-auto flex justify-center items-center gap-4'>
              <span><IoCarSportOutline /></span>
              <span> Used Car</span>
            </div>
          </div>

          {/* form  */}
          <div className="w-full h-auto mx-auto p-2 lg:max-w-3xl lg:mx-auto lg:p-6">
            <h1 className="text-center text-xl lg:text-center lg:font-semibold lg:text-3xl text-blue-800">Create your seller account</h1>

            <form action="" onSubmit={handleSubmit(onSubmit)}>

              <div className='w-[90%] py-4 mx-auto lg:w-full lg:py-4 lg:mx-1'>
                <label className=" block mb-2 font-medium">
                  Name
                </label>

                <input
                  type="text" placeholder='Name'
                  className="w-full p-2 h-auto lg:w-full border lg:p-3 rounded-lg"
                  {...register("name", {
                    required: "Name field is required",
                  })}
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>


              <div className='w-[90%] py-2 mx-auto lg:w-full lg:py-4 lg:mx-1'>
                <label className=" block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email" placeholder='foreexample@gmail.com'
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

              <div className='w-[90%] py-2 mx-auto lg:w-full lg:py-4 lg:mx-1'>
                <label className="block mb-2 font-medium">
                  Password
                </label>

                <input
                  type="password" placeholder='**************************'
                  className="w-full p-2 h-auto lg:w-full border lg:p-3 rounded-lg placeholder:text-xl font-semibold"
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

              <div className=" w-[90%] mx-auto lg:w-full lg:py-4 lg:mx-1 flex flex-col justify-center items-center gap-2 py-4 ">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-auto p-2   lg:p-3 rounded-lg text-white lg:w-full lg:auto mx-auto   ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-900 hover:bg-blue-700"}`}
                >
                  {loading ? "Signing..." : "Sign up"}
                </button>
              </div>

               <div className='w-full py-2 lg:w-full lg:py-4 lg:mx-1'>
                <Link href="/sign-in" className='flex justify-center items-center' >
                  <p> Already have account?</p>
                  <span className='px-2 text-blue-600  underline'>Login</span>
                </Link>

              </div>
            </form>
          </div>

        </div>

      </div>
    </>
  )
}
