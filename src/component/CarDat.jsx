"use client";
import React from "react";
import { HiOutlineUsers } from "react-icons/hi";
import { IoShieldOutline } from "react-icons/io5";
import { MdMoney } from "react-icons/md";
import { PiListChecks } from "react-icons/pi";
import { TbBrandWindows } from "react-icons/tb";

export default function CarDat() {
  const carData = [
    {
      id: 1,
      percent: 12,
      icon: TbBrandWindows,
      rate: "4.2M",
      title: "Total GMV",
    },
    {
      id: 2,
      percent: 12,
      icon: PiListChecks,
      rate: 214,
      title: "Cars Sold",
    },
    {
      id: 3,
      percent: 12,
      icon: MdMoney,
      rate: 1842,
      title: "Registered Users",
    },
    {
      id: 4,
      percent: 12,
      icon: IoShieldOutline,
      rate: 48,
      title: "Active Dealers",
    },
    {
      id: 5,
      percent: 12,
      icon: HiOutlineUsers,
      rate: "38.4K",
      title: "Platform Revenue",
    },
  ];

  return (
    <div className="w-[95%] lg:w-[90%] mx-auto py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {carData.map((data) => {
          const Icon = data.icon;

          return (
            <div
              key={data.id}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Icon size={28} className="text-blue-800" />
                </div>

                <span className="text-green-600 font-semibold text-sm">
                  +{data.percent}%
                </span>
              </div>

              <div className="mt-6">
                <h2 className="text-2xl font-bold">{data.rate}</h2>
                <p className="text-gray-500 text-sm mt-1">{data.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}