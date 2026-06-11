import { data_vehicle } from '@/lib/data_vehicle';
import Image from 'next/image';
import React, { useMemo, useState } from 'react'

export default function Splashscreen() {
   // --- 1. State Configurations ---
  const [minPrice, setMinPrice] = useState(5000000);
  const [maxPrice, setMaxPrice] = useState(65000000);
  const [make, setMake] = useState("Toyota");
  const [bodyType, setBodyType] = useState("Sedan");
  const [transmission, setTransmission] = useState("Automatic");
  const [fuelType, setFuelType] = useState("Petrol");


  // Absolute boundaries for the slider tracks
  const absoluteMin = 5000000;
  const absoluteMax = 65000000;

  // --- 2. Live Filtering Logic ---
  const filteredVehicles = useMemo(() => {
    return data_vehicle.filter((car) => {
      return (
        car.price >= minPrice &&
        car.price <= maxPrice &&
        (make ? car.make === make : true) &&
        (bodyType ? car.body === bodyType : true) &&
        (transmission ? car.transmission === transmission : true) &&
        (fuelType ? car.fuel === fuelType : true)
      );
    });
  }, [minPrice, maxPrice, make, bodyType, transmission, fuelType]);

  // --- 3. Format Currency Utility ---
  const formatCurrency = (value) => {
    return "₦" + value.toLocaleString("en-NG");
  };

  // --- 4. Handle Range Slider Dynamics ---
  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1000000);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1000000);
    setMaxPrice(value);
  };

  // Calculate percentage positions for the active blue track bar overlay
  const minPercent = ((minPrice - absoluteMin) / (absoluteMax - absoluteMin)) * 100;
  const maxPercent = ((maxPrice - absoluteMin) / (absoluteMax - absoluteMin)) * 100;
  return (
    <>
      
        {/* Hero Sectiom */}
        <div className="relative h-auto  w-full  bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/image/carBg6.jfif')", }}>

          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col lg:flex-row justify-center lg:justify-around items-center w-full px-4 sm:px-6 lg:px-10 py-10 lg:py-16 gap-8 lg:gap-12">

            {/* card for logos platform */}
            <div className=' w-full h-auto py-4 px-4 lg:w-160 lg:py-16 lg:px-16  text-white '>
              <p className='text-3xl py-2 lg:text-7xl  lg:py-4'>Logos #1 Platform to Buy & Sell Used Cars </p>
              <p className='sm:text-sm lg:text-xl  lg:py-4'>Fine verified tokunbo, Nigerian-used and brand new cars transparent pricing. Real dealers</p>
            </div>

            {/* form for max-min filer */}
            <div className='w-full h-auto mt-16 lg:w-100 lg:h-auto bg-white  lg:py-4 rounded-4xl '>
              {/* layout or container for form */}
              <div className="h-120 w-full flex items-center justify-center pt-12 rounded-4xl   ">
                {/* Main UI Container Widget */}
                <div className="bg-white rounded-4xl shadow-xl p-6 w-full h-auto max-w-md border border-slate-100">

                  {/* Header Title */}
                  <h2 className="text-xl font-bold text-slate-800 tracking-tight mb-6">
                    Find your next awesome vehicle
                  </h2>

                  {/* --- Price Range Readout --- */}
                  <div className="flex justify-between items-center text-sm font-semibold text-[#1e295d] mb-4">
                    <div>
                      <span>{formatCurrency(minPrice)}</span>
                      <span className="text-xs text-gray-400 font-normal ml-1">(Min)</span>
                    </div>
                    <div className="text-right">
                      <span>{formatCurrency(maxPrice)}</span>
                      <span className="text-xs text-gray-400 font-normal ml-1">(Max)</span>
                    </div>
                  </div>

                  {/* --- Custom Double Slider System --- */}
                  <div className="relative w-full h-2 rounded-full bg-slate-200 mb-8 mt-2">
                    {/* Active colored bar overlay indicator */}
                    <div
                      className="absolute h-full  bg-blue-900 rounded-full"
                      style={{
                        left: `${minPercent}%`, right: `${100 - maxPercent}%`,
                      }}
                    />

                    {/* Native Hidden Range Inputs Overlaid on Top */}
                    <input
                      type="range"
                      min={absoluteMin}
                      max={absoluteMax}
                      step={500000}
                      value={minPrice}
                      onChange={handleMinChange}
                      className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none custom-slider-thumb z-20"
                    />
                    <input
                      type="range"
                      min={absoluteMin}
                      max={absoluteMax}
                      step={500000}
                      value={maxPrice}
                      onChange={handleMaxChange}
                      className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none custom-slider-thumb z-20"
                    />
                  </div>

                  {/* --- Dropdown Selector Grid --- */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {/* Brand/Make Picker */}
                    <div className="relative border border-gray-200 rounded-xl px-3 py-2 flex items-center bg-white shadow-sm hover:border-gray-300">
                      <span className="mr-2 text-red-600 font-bold text-sm"></span>
                      <select
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                        className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none appearance-none cursor-pointer"
                      >
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>

                      </select>
                    </div>

                    {/* Body Type Picker */}
                    <div className="relative border border-gray-200 rounded-xl px-3 py-2 flex items-center bg-white shadow-sm hover:border-gray-300">
                      <span className="mr-2 text-blue-500 text-sm"></span>
                      <select
                        value={bodyType}
                        onChange={(e) => setBodyType(e.target.value)}
                        className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none appearance-none cursor-pointer"
                      >
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                      </select>
                    </div>

                    {/* Gear Transmission Picker */}
                    <div className="relative border border-gray-200 rounded-xl px-3 py-2 flex items-center bg-white shadow-sm hover:border-gray-300">
                      <span className="mr-2 text-indigo-500 text-sm"></span>
                      <select
                        value={transmission}
                        onChange={(e) => setTransmission(e.target.value)}
                        className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none appearance-none cursor-pointer"
                      >
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                      </select>
                    </div>

                    {/* Fuel Category Picker */}
                    <div className="relative border border-gray-200 rounded-xl px-3 py-2 flex items-center bg-white shadow-sm hover:border-gray-300">
                      <span className="mr-2 text-blue-600 text-sm"></span>
                      <select
                        value={fuelType}
                        onChange={(e) => setFuelType(e.target.value)}
                        className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none appearance-none cursor-pointer"
                      >
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                      </select>
                    </div>
                  </div>

                  {/* --- Live Filtered Matching Car Cards --- */}
                  <div className="space-y-3 max-h-25 overflow-y-auto pr-1 mb-6 scrollbar-thin">
                    {filteredVehicles.length > 0 ? (
                      filteredVehicles.map((car) => (
                        <div
                          key={car.id}
                          className="flex items-center p-2.5 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                          <Image
                            src={car.image}
                            alt={`${car.make} ${car.model}`}
                            width={300}
                            height={300}
                            className="w-4 h-4 object-cover rounded-xl bg-slate-100 mr-3"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-slate-800 truncate">
                              {car.make} {car.model} ({car.year})
                            </h4>
                            <div className="flex items-center text-xs text-gray-400 mt-0.5">
                              <span className="mr-1"> </span> {car.location}
                            </div>
                          </div>
                          <div className="text-right pl-2">
                            <span className="text-sm font-bold text-slate-700 whitespace-nowrap">
                              {formatCurrency(car.price)}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-6 text-sm text-gray-400">
                        No vehicles fit your specified filter ranges.
                      </div>
                    )}
                  </div>

                  {/* --- Interactive Primary Button Footer --- */}
                  <button className="w-full bg-blue-900 hover:bg-[#16186b] cursor-pointer text-white font-semibold py-4 px-4 rounded-2xl transition-colors shadow-md flex items-center justify-center text-md mb-4">
                    Find {filteredVehicles.length} Vehicles
                  </button>

                  {/* Advanced Feature Action */}
                  <div className="text-center">
                    <button className="text-xs text-gray-500 font-semibold hover:text-slate-800 transition-colors inline-flex items-center gap-1">
                      Advanced Search <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
    </>
  )
}
