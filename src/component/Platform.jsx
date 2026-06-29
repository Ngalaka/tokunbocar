"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiPlus } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
export default function Platform() {
  const [loading, setLoading] = useState(false);

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
        "Upload car Successful",
      );
      //  Clear all form fields
      reset();
    } catch (error) {
      console.log(error);
      notifyError(
        // error.response?.data?.message ||
        "Upload Cars Failed",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-full h-auto">
  <div className="w-[95%] lg:w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">

    {/* Platform Overview */}
    <div className="w-full lg:w-auto">
      <h1 className="text-2xl font-bold">Platform Overview</h1>
    </div>

    {/* Search & Upload */}
    <div className="w-full lg:w-[60%]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col sm:flex-row gap-4">

          {/* Search Input */}
          <div className="flex items-center w-full border border-black/10 rounded-lg px-3">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 outline-none text-sm"
              {...register("search", {
                required: "Search field is required",
              })}
            />
            <IoIosSearch size={20} />
          </div>

          {/* Upload Button */}
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-900 hover:bg-blue-700"
            } text-white flex justify-center items-center gap-2 px-5 py-2 rounded-lg whitespace-nowrap`}
          >
            <FiPlus size={20} />
            {loading ? "Uploading..." : "Upload Cars"}
          </button>

        </div>
      </form>
    </div>

  </div>
</div>
    </>
  );
}
