
"use client"
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
    //  getValues, // for checking password and confirm password
  } = useForm();
 
  const onSubmit = async (data) => {
    // compare password and confirm password
    if (data.password !== data.confirm) {
     return alert("Passwords do not match");
    }
    setLoading(true);
    try {
     alert("Form Submitted Successfully", data);
      // Clear all form fields
      reset();
    } catch (error) { 
      setLoading(false);
      console.log(error);
      
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-full lg:w-[60%] h-auto  lg:mx-auto lg: p-6">
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

              <div className='w-[90%] py-2 mx-auto lg:w-full '>
                <label className=" block mb-2 font-medium">
                  First name
                </label>

                <input
                  type="text" placeholder='Name'
                  className="w-full p-2 h-auto lg:w-full border rounded-lg"
                  {...register("FirstName", {
                    required: "Name field is required",
                  })}
                />

                {errors.FirstName && (
                  <p className="text-red-500 text-sm">
                    {errors.FirstName.message}
                  </p>
                )}
              </div>

                   <div className='w-[90%] py-2 mx-auto lg:w-full '>
                <label className=" block mb-2 font-medium">
                  First name
                </label>

                <input
                  type="text" placeholder='Name'
                  className="w-full p-2 h-auto lg:w-full border rounded-lg"
                  {...register("lastName", {
                    required: "Name field is required",
                  })}
                />

                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>


              <div className='w-[90%] py-2 mx-auto lg:w-full '>
                <label className=" block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email" placeholder='foreexample@gmail.com'
                  className="w-full p-2 h-auto lg:w-full border  rounded-lg"
                  {...register("email", {
                    required: "Email field is required",
                  })}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm ">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className='w-[90%] py-2 mx-auto lg:w-full lg:mx-1'>
                <label className="block  font-medium">
                  Password
                </label>

                <input
                  type="password" placeholder='**************************'
                  className="w-full p-2 h-auto lg:w-full border rounded-lg px-2 placeholder:text-xl font-semibold"
                  {...register("password", {
                    required: "Password field is required",
                    minLength: {
                      value: 12,
                      message: "Password must be at least 12 characters",
                    },
                  })}
                />

                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className='w-full py-2 lg:w-full'>
                <label className="block mb-2 font-medium ">
                  Confirm Password
                </label>

                <input
                  type="password" placeholder='********************'
                  className="w-full h-auto py-2 lg:w-full border rounded-lg px-2 placeholder:text-xl font-semibold"
                  {...register("confirm", {
                    required: "Confirm password field is required",
                    minLength: {
                      value: 12,
                      message: "Password must be at least 12 characters",
                    },

                    // another way to compare password with confirm password

                    // validate: (value) =>
                    //   value === getValues("password") ||
                    //   "Passwords do not match",
                  })}
                />

                {errors.confirm && (
                  <p className="text-red-500 text-sm">
                    {errors.confirm.message}
                  </p>
                )}
              </div>


               <div className='w-[90%] py-2 mx-auto lg:w-full '>
                <label className=" block mb-2 font-medium">
                  Mobile Number
                </label>

                <input
                  type="text" placeholder='Name'
                  className="w-full p-2 h-auto lg:w-full border rounded-lg"
                  {...register("mobile", {
                    required: "Business name field is required",
                  })}
                />

                {errors.mobile && (
                  <p className="text-red-500 text-sm">
                    {errors.mobile.message}
                  </p>
                )}
              </div>


               <div className='w-[90%] py-2 mx-auto lg:w-full '>
                <label className=" block mb-2 font-medium">
                  Business Name
                </label>

                <input
                  type="text" placeholder='Name'
                  className="w-full p-2 h-auto lg:w-full border rounded-lg"
                  {...register("busName", {
                    required: "Business name field is required",
                  })}
                />

                {errors.busName && (
                  <p className="text-red-500 text-sm">
                    {errors.busName.message}
                  </p>
                )}
              </div>

              
              <div className=" w-[90%] mx-auto lg:w-full l  flex flex-col justify-center items-center gap-2 py-2 ">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-auto p-2   lg:p-2 rounded-lg text-white lg:w-full lg:auto mx-auto   ${loading ? "bg-gray-300 cursor-not-allowed" : "bg-blue-900 hover:bg-blue-700"}`}
                >
                  {loading ? "Signing..." : "Sign up"}
                </button>
              </div>

              <div className='w-full py-2 lg:w-full'>
                <Link href="/sign-in" className='flex justify-center items-center' >
                  <p> Already have account?</p>
                  <span className=' text-blue-600  underline'>Login</span>
                </Link>

              </div>
            </form>
          </div>

        </div>

      </div>
    </>
  )
}
