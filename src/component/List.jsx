"use client";
import React from "react";
import { IoShieldOutline } from "react-icons/io5";
import { FaListOl } from "react-icons/fa";
import { RiPassPendingFill } from "react-icons/ri";
import { GiSellCard } from "react-icons/gi";


export default function List() {
  const carData = [
    {
      id: 1,
      icon: FaListOl,
      rate: "312",
      title: "Total listings",
    },
    {
      id: 2,
      icon: GiSellCard,
      rate: 280,
      title: "Active",
    },
    {
      id: 3,
      icon:RiPassPendingFill,
      rate: 12,
      title: "Pending review",
    },
    {
      id: 4,
      icon: IoShieldOutline,
      rate: 214,
      title: "Sold",
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
              <Icon size={28} className="text-blue-800" />
                <h2 className="text-2xl font-bold">{data.rate}</h2>
                <p className="text-gray-500 text-sm mt-1">{data.title}</p>
              </div>
          );
        })}
      </div>
    </div>
  );
}
