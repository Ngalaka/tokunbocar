"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { RiCloseCircleLine } from 'react-icons/ri';
import Navbar from './Navbar';

export default function BuyerSignUp() {

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
      fName: "",
      lName: "",
      phone: "",
      agree: false
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

    {/* Navbar */}

   
      {/* sign up section */}
      <div className="w-[90%]  lg:w-full h-auto  lg:mx-auto lg: p-6">
        <div className="w-full h-auto shadow-sm  bg-white  lg:w-200 lg:h-full m-auto lg:shadow-xl ">

        
          <div className=" w-full h-auto lg:py-2">
            <h1 className="text-center lg:text-center lg:font-semibold">Register via email and phone</h1>
          </div>

          {/* form section */}
          <div className="w-full h-auto mx-auto p-2 lg:max-w-3xl lg:mx-auto lg:p-6">
            <form action="" onSubmit={handleSubmit(onSubmit)}>

              <div className='w-full lg:w-full lg:py-4 lg:mx-1'>
                <label className="block mb-2 font-medium py-2">
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

              <div className='w-full mx-auto lg:w-full lg:py-4 lg:mx-1'>
                <label className="block mb-2 font-medium py-2">
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

              <div className='w-full  lg:w-full lg:py-4 lg:mx-1'>
                <span className="text-black/40 ">Never disclose your logos used car password to anyone</span>
              </div>

              <div className='w-full  lg:w-full lg:py-4 lg:mx-1'>
                <label className="block mb-2 font-medium py-2">
                  Comfirm Password
                </label>

                <input
                  type="password"
                  className="w-full p-2 h-auto lg:w-full border lg:p-3 rounded-lg"
                  {...register("comfirm", {
                    required: "Comfirm password field is required",
                  })}
                />

                {errors.comfirm && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.comfirm.message}
                  </p>
                )}
              </div>

              <div className='w-full lg:w-full lg:py-4 lg:mx-1'>
                <label className="block mb-2 font-medium py-2">
                  First Name
                </label>

                <input
                  type="text"
                  className="w-full p-2 h-auto lg:w-full border lg:p-3 rounded-lg"
                  {...register("fName", {
                    required: "First name field is required",
                  })}
                />

                {errors.fName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fName.message}
                  </p>
                )}
              </div>

              <div className='w-full lg:w-full lg:py-4 lg:mx-1'>
                <label className="block mb-2 font-medium">
                  Last Name
                </label>

                <input
                  type="text"
                  className="w-full  p-2 h-auto lg:w-full  border lg:p-3 rounded-lg outline-none hover:outline-1"
                  {...register("lName", {
                    required: "Last name field is required",
                  })}
                />

                {errors.lName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lName.message}
                  </p>
                )}
              </div>

              <div className='w-full lg:w-full lg:py-4 lg:mx-1'>
                <label className="block mb-2 font-medium py-2">
                  Mobile Number
                </label>

                <input
                  type="text"
                   className="w-full p-2 h-auto lg:w-full border lg:p-3 rounded-lg outline-none hover:outline-1"
                  {...register("mobile", {
                    required: "Mobile number field is required",
                  })}
                />

                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mobile.message}
                  </p>
                )}
              </div>


              <div className='w-full lg:w-full lg:py-4 lg:mx-1'>
                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className={`w-4 h-4 border border-black/40 p-2 mx-2 outline-none ${errors.agree ? 'border-2 border-red-500' : ' border border-green-700'
                      }`}
                    {...register("agree", {
                      required: "check on the rules",
                    })}
                  />
                  <span className="text-sm text-black py-2">
                    I agree to the terms and rules
                  </span>
                </div>
                {errors.agree && (
                  <p className="text-red-500 text-sm mt-1 pl-4">
                    {errors.agree.message}
                  </p>
                )}
              </div>


              <div className='w-full  lg:w-full lg:py-4 lg:mx-1'>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-auto py-2  lg:p-3 rounded-lg text-white lg:w-full lg:auto mx-auto   ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-900 hover:bg-blue-700"}`}
                >
                  {loading ? "Registering..." : "Register"}
                </button>

              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}
