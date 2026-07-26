"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { IoCarSportOutline, IoEyeSharp } from 'react-icons/io5';
import axios from 'axios';
import {useRouter } from 'next/navigation';

import {
  notifySuccess,
  notifyError,
} from "@/lib/toast";


export default function Signin() {

   const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

      const res = await axios.post('/api/sign-in', data)

        // store token in local storage
        // remember this is not the production way to go
        // storing token in cookies is the better approach
        localStorage.setItem('token', res.data.data.token)
        console.log("Saved Token:", localStorage.getItem("token"));

        // if the user is a buyer, route to the buyer's dashboard
        if (res.data.data.userRole === "buyer") {
          // route to dashbaord
          router.push('/')
        }

        else if (res.data.data.userRole === "seller") {
          // route to seller's dashboard
          router.push('/single-car')
        }

        else if (res.data.data.userRole === "admin") {
          // route to admin dashboard
          router.push('/carsale-upload')
        }

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

    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className='w-full flex-col justify-center items-center  lg:w-[90%] lg:h-auto lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-16 lg:mx-auto'>
        {/* Car image */}
        <div className='w-full py-4 lg:w-[50%] h-auto lg:py-1'>
          <Image src="/image2/car8.jpg" width={300} height={300} alt='Car logo' className='w-full h-auto  lg:w-full lg:h-[90vh] object-cover' />
        </div>


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
            <h1 className='w-full text-2xl text-center lg:w-100 font-semibold lg:text-3xl lg:mx-auto text-blue-800 py-2 px-2'>Welcome Login to your account</h1>

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

              <div className='w-[90%] py-2 mx-auto lg:w-full lg:py-2 lg:mx-1'>
                <label className="block mb-2 font-medium">
                  Password
                </label>

                <div className="border border-black  px-2 outline-none hover:outline-1 rounded-lg placeholder:px-3 text-sm flex justify-between items-center">
                  <input
                    type={showPassword ? "text" : "password"} name='password' placeholder='********************'
                    className="w-full p-2 h-auto lg:w-full outline-none"
                    {...register("password", {
                      required: "Password field is required",
                      minLength: {
                        value: 12,
                        message: "Password must be at least 12 characters",
                      },

                    })}
                  />
                  <div onClick={() => setShowPassword(!showPassword)} className='cursor-pointer'>
                    {
                      showPassword ? <IoEyeSharp size={25} /> : <FaRegEyeSlash size={25} />
                    }

                  </div>
                </div>

                {errors.password && (
                  <p className="text-red-500 text-sm py-1">
                    {errors.password.message}
                  </p>
                )}
              </div>



              <div className="w-[90%] mx-auto flex-col justify-start items-start py-4 lg:py-2 lg:mx-1 lg:w-full flex lg:flex-row lg:justify-between lg:items-center lg:gap-2 ">
                <p>
                  I dont have an Account
                  <Link href="/sign-up" className='px-2 text-blue-600  underline'>
                    Sign Up
                  </Link>
                </p>

                <Link href="#" className='px-2 text-blue-600 py-2'>
                  Lost your password
                </Link>
              </div>

              <div className=" w-[90%] mx-auto lg:w-full l  flex flex-col justify-center items-center gap-2 py-2 ">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-auto p-2   lg:p-2 rounded-lg text-white lg:w-full lg:auto mx-auto   ${loading ? "bg-gray-300 cursor-not-allowed" : "bg-blue-900 hover:bg-blue-700"}`}
                >
                  {loading ? "Login..." : "Login"}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </>
  )
}
