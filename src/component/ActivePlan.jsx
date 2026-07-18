import { finance } from "@/lib/finance";
import React from "react";
export default function ActivePlan() {
  // lib/pendingApproval.js

const finance = [
  {
    id: 1,
    name: "Stella Osinachi Ngalaka",
    start:"Plans started jan 2026",
    car: "2020 Honda Civic Lx",
    price: "14.6M",
   
  },
  {
    id: 2,
    name: "Favour Paul",
    start:"Plans started march 2021",
    car: "2021 Ford Escape",
    price: "12.8M",
    
  },

   {
    id: 3,
    name: "Ruth Etim",
    start:"Plans started April 2020",
    car: "Nissan Altima",
    price: "9.5M",
     
  },
  {
    id: 4,
    name: "Sarah Timothy",
    start:"Plans started May 2023",
    car: "Chevrolet Malibu",
    price: "11.1M",
  },

   {
    id: 5,
    name: "Dickson Ajiwa",
    start:"Plans started july 2019",
    car: "Subaru Outback",
    price: "15.0M",
    
  },
  {
   id: 6,
    name: "Morrison Ngalaka",
    start:"Plans started july 2026",
    car: "BMW",
    price: "15.2M",
   
  },
];
  return (
    <>
      {/* Desktop view */}
      <div className="hidden md:block mt-6 w-[80%] ">
        <h1 className="font-bold">Active finance plans</h1>
        <table className="w-full">
          <thead>
            <tr className="text-left text-black/40">
              <th className="py-4 px-4">Buyer</th>
              <th className="py-4 px-4">Car</th>
              <th className="py-4 px-4">Price</th>
            </tr>
          </thead>

          <tbody className="text-black/50 ">
            {finance.map((item) => (
              <tr key={item.id}>
                <td className="flex flex-col justify-start items-start py-2">
                  <span>{item.name}</span>
                  <span>{item.start}</span>
                </td>
                <td className="py-2 px-4">{item.car}</td>

                <td className="py-2 px-4 ">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Screen */}
      <div className="md:hidden mt-6 space-y-4">
        {finance.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-4"
          >
            <div className="space-y-4">
              {/* Car */}
              <div className="flex justify-between items-start gap-4">
                <span className="text-sm font-semibold text-gray-500">Car</span>

                <div className="text-right">
                  <p className="font-semibold text-gray-800 break-words">
                    {item.name}
                  </p>

                  <p className="text-sm text-gray-500">{item.start}</p>
                </div>
              </div>

              {/* Dealer */}
              <div className="flex justify-between items-start gap-4">
                <span className="text-sm font-semibold text-gray-500">
                  Dealer
                </span>

                <span className="text-right text-gray-800 wrap-break-word">
                  {item.car}
                </span>
              </div>

              {/* Price */}
              <div className="flex justify-between items-center gap-4">
                <span className="text-sm font-semibold text-gray-500">
                  Price
                </span>

                <span className="font-bold text-blue-600">{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
