 "use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoCarSportOutline } from 'react-icons/io5';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function BuyerSignUp() {
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
    
     const userType='buyer';
     console.log("User data ", data )
     const payload={

      firstName:data.firstName,
      lastName:data.lastName,
      email:data.email,
      password:data.password,
      busName:data.password,
      mobile:data.mobile,
      userType

     }

     const res=await axios.post('api/sign-up', payload)
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

      {/* Navbar */}


      {/* sign up section */}
      <div className="w-full  lg:w-[60%] h-auto  lg:mx-auto lg: p-6">
        <div className="w-full h-auto shadow-sm bg-white  lg:w-200 lg:h-full m-auto lg:shadow-xl ">
          <div className='w-full lg:w-50 mx-auto h-auto flex flex-col justify-start items-start text-center py-4'>
            <h1 className='w-full font-bold text-2xl cursor-pointer py-2 px-12 '>LAGOS</h1>

            <div className='w-full h-auto flex justify-center items-center gap-4'>
              <span><IoCarSportOutline /></span>
              <span> Used Car</span>
            </div>

          </div>
          <div className=" w-full h-auto lg:py-2">
            <h1 className="text-center text-xl lg:text-center lg:font-semibold lg:text-3xl text-blue-800">Create your buyer account</h1>
          </div>

          {/* form section */}
          <div className="w-full h-auto mx-auto lg:max-w-3xl lg:mx-auto lg:p-6">
            <form action="" onSubmit={handleSubmit(onSubmit)}>

              <div className='w-full py-1 lg:w-full'>
                <label className="block font-medium">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full py-2 h-auto lg:w-full border rounded-lg"
                  {...register("email", {
                    required: "Email field is required",
                  })}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className='w-full py-2 lg:w-full'>
                <label className="block  font-medium ">
                  Password
                </label>

                <input
                  type="password"
                  className="w-full h-auto py-2 lg:w-full border rounded-lg"
                  {...register("password", {
                    required: "Password field is required",
                    minLength: {
                      value: 12,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />

                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className='w-full py-2 lg:w-full '>
                <span className="text-black/40 ">Never disclose your logos used car password to anyone</span>
              </div>

              <div className='w-full py-2 lg:w-full'>
                <label className="block mb-2 font-medium ">
                  Confirm Password
                </label>

                <input
                  type="password"
                  className="w-full h-auto py-2 lg:w-full border rounded-lg"
                  {...register("confirm", {
                    required: "Confirm password field is required",
                    minLength: {
                      value: 12,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />

                {errors.confirm && (
                  <p className="text-red-500 text-sm">
                    {errors.confirm.message}
                  </p>
                )}
              </div>

              <div className='w-full lg:w-full'>
                <label className="block font-medium">
                  First Name
                </label>

                <input
                  type="text"
                  className="w-full h-auto py-2 lg:w-full border rounded-lg"
                  {...register("firstName", {
                    required: "First name field is required",
                  })}
                />

                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className='w-full py-2 lg:w-full '>
                <label className="block font-medium">
                  Last Name
                </label>

                <input
                  type="text"
                  className="w-full  py-2 h-auto lg:w-full  border rounded-lg outline-none hover:outline-1"
                  {...register("lastName", {
                    required: "Last name field is required",
                  })}
                />

                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div className='w-full py-2 lg:w-full lg:mx-1'>
                <label className="block font-medium ">
                  Mobile Number
                </label>

                <input
                  type="text"
                  className="w-full py-2 h-auto lg:w-full border rounded-lg outline-none hover:outline-1"
                  {...register("mobile", {
                    required: "Mobile phone number field is required",
                  })}
                />

                {errors.mobile && (
                  <p className="text-red-500 text-sm ">
                    {errors.mobile.message}
                  </p>
                )}
              </div>


              {/* <div className='w-full py-2 lg:w-full'>
                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className={`w-4 h-4 border py-2 border-black/40 outline-none ${errors.agree ? 'border-2 border-red-500' : ' border border-green-700'
                      }`}
                    {...register("agreeTerm", {
                      required: "check on the rules",
                    })}
                  />
                  <span className="text-sm text-black">
                    I agree to the terms and rules
                  </span>
                </div>
                {errors.agreeTerm && (
                  <p className="text-red-500 text-sm">
                    {errors.agreeTerm.message}
                  </p>
                )}
              </div> */}


              <div className=" w-[90%] mx-auto lg:w-full l  flex flex-col justify-center items-center gap-2 py-2 ">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-auto p-2   lg:p-2 rounded-lg text-white lg:w-full lg:auto mx-auto   ${loading ? "bg-gray-300 cursor-not-allowed" : "bg-blue-900 hover:bg-blue-700"}`}
                >
                  {loading ? "Signing..." : "Sign up"}
                </button>
              </div>


              <div className='w-full py-2 lg:w-full '>
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
