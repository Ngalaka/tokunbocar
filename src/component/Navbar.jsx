import Link from 'next/link'
import React from 'react'
import { FaUser } from 'react-icons/fa6'
import { IoCarSportOutline } from 'react-icons/io5'
import { TiStarburstOutline } from 'react-icons/ti'

export default function Navbar() {
  return (
    <>
      <div className="w-full flex flex-col gap-6 px-4 py-4 lg:w-[90%] lg:flex-row lg:justify-between lg:items-center lg:mx-auto">

  {/* Logo Section */}
  <div className="w-full lg:w-1/4 flex flex-col gap-3">
    <p>
      <Link
        href="/"
        className="text-gray-700 hover:text-blue-600 font-semibold"
      >
        LAGOS
      </Link>
    </p>

    <Link
      href="/"
      className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
    >
      <span className="text-blue-900 text-xl">
        <IoCarSportOutline />
      </span>

      <span className="text-sm">
        Used Cars
      </span>
    </Link>
  </div>

  {/* Search Section */}
  <div className="w-full lg:w-1/3 flex flex-col sm:flex-row gap-2">

    <input
      type="text"
      placeholder="Search cars..."
      className="w-full border border-gray-300 outline-none px-4 py-2 rounded-lg placeholder:text-sm"
    />

    <button
      className="bg-blue-900 px-5 py-2 text-white text-sm rounded-lg hover:bg-blue-700 transition"
    >
      Search
    </button>

  </div>

  {/* Action Section */}
  <div className="w-full lg:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">

    {/* Drive Now */}
    <Link
      href="/single-car"
      className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
    >
      <span className="text-blue-900 text-xl">
        <TiStarburstOutline />
      </span>

      <span className="text-sm">
        Drive Now Pay Later
      </span>
    </Link>

    {/* Login */}
    <Link
      href="/sign-in"
      className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
    >
      <span className="text-blue-900">
        <FaUser size={20} />
      </span>

      <span className="text-sm">
        Login
      </span>
    </Link>

    {/* Sell Car Button */}
    <Link
      href="/sell-car"
      className="bg-blue-900 px-5 py-2 rounded-lg text-white text-sm hover:bg-blue-700 transition"
    >
      Sell Your Car
    </Link>

  </div>

</div>

    </>
  )
}
