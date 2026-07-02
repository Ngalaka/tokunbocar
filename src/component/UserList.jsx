"use client";
import React from "react";
import { IoShieldOutline } from "react-icons/io5";
import { FaListOl } from "react-icons/fa";
import { RiPassPendingFill } from "react-icons/ri";
import { GiSellCard } from "react-icons/gi";


export default function UserList() {
  const carData = [
    {
      id: 1,
      icon: FaListOl,
      percent: 12,
      rate: 1842,
      title: "Total users",
    },
    {
      id: 2,
      icon: GiSellCard,
      percent: 12,
      rate: 1695,
      title: "Verifiedd Users",
    },
    {
      id: 3,
      icon:RiPassPendingFill,
       percent: 34,
      rate: 24,
      title: "Weekly Active Users",
    },
    {
      id: 4,
       percent: 3,
      icon: IoShieldOutline,
      rate: 72,
      title: "Finance plan users",
    },
  ];

  return (
    <div className="w-[95%] lg:w-full mx-auto py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {carData.map((data) => {
          const Icon = data.icon; 

          return (
            <div
              key={data.id}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow"
            >
                <div className="flex justify-between items-center gap-2">
                     <Icon size={28} className="text-blue-800" />
                     <span className="text-green-700 bg-green-200">{data.percent}%</span>
                </div>
             
                <h2 className="text-2xl font-bold">{data.rate}</h2>
                <p className="text-gray-500 text-sm mt-1">{data.title}</p>
              </div>
          );
        })}
      </div>
    </div>
  );
}
