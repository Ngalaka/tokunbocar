import React from "react";
import { pendingApprovals } from "@/lib/pendingApproval";

export default function PendingAppro() {
  // lib/pendingApproval.js

 const pendingApprovals = [
  {
    id: 1,
    car: "Toyota Camry",
    dealer: "John Motors",
    price: "80M",
    submitted: "Today 9am",
    approve: "Approve",
    reject: "Reject",
  },
  {
    id: 2,
    car: "Honda Accord",
    dealer: "Auto World",
    price: "48M",
    submitted: "Today 9am",
    approve: "Approve",
    reject: "Reject",
  },

   {
    id: 3,
    car: "Toyota Camry",
    dealer: "John Motors",
    price: "80M",
    submitted: "Today 9am",
    approve: "Approve",
    reject: "Reject",
  },
  {
    id: 4,
    car: "Honda Accord",
    dealer: "Auto World",
    price: "48M",
    submitted: "Today 9am",
    approve: "Approve",
    reject: "Reject",
  },

   {
    id: 5,
    car: "Toyota Camry",
    dealer: "John Motors",
    price: "80M",
    submitted: "Today 9am",
    approve: "Approve",
    reject: "Reject",
  },
  {
    id: 6,
    car: "Honda Accord",
    dealer: "Auto World",
    price: "48M",
    submitted: "Today 9am",
    approve: "Approve",
    reject: "Reject",
  },
];
  return (
   <div className="w-full bg-white rounded-xl py-2 ">
  {/* Header */}
  <div className="flex gap-2 border-none md:flex-row md:justify-between md:items-center lg:gap-4 lg:border-b pb-5">
    <h1 className="text-xl md:text-2xl font-bold ">
      Pending Approvals
    </h1>

    <button className=" font-medium hover:underline w-fit text-black/30">
      View All
    </button>
  </div>

 
  {/* Desktop view */}
  

  <div className="hidden md:block mt-6 shadow-md">
    <table className="w-full">
      <thead>
        <tr className="text-left text-black/40">
          <th className="py-4 px-4">Car</th>
          <th className="py-4 px-4">Dealer</th>
          <th className="py-4 px-4">Price</th>
          <th className="py-4 px-4">Submitted</th>
          <th className="py-4 px-4">Action</th>
        </tr>
      </thead>

      <tbody className="text-black/50">
        {pendingApprovals.map((item) => (
          <tr
            key={item.id}
          >
            <td className="py-2 px-4">{item.car}</td>

            <td className="py-2 px-4">{item.dealer}</td>

            <td className="py-2 px-4 ">
              {item.price}
            </td>

            <td className="py-2 px-4">
              {item.submitted}
            </td>

            <td className="py-2 px-4">
              <div className="flex gap-3">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                  {item.approve}
                </button>

                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                  {item.reject}
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  
  {/* Mobile screen */}
 

  <div className="md:hidden mt-6 space-y-2 shadow-md">
    {pendingApprovals.map((item) => (
      <div
        key={item.id}
        className="py-8"
      >
        <div className="space-y-3">

          <div className="flex justify-between">
            <span className="font-semibold text-gray-500">
              Car
            </span>

            <span className="font-medium text-right">
              {item.car}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-500">
              Dealer
            </span>

            <span className="text-right">
              {item.dealer}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-500">
              Price
            </span>

            <span className="font-semibold">
              {item.price}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-500">
              Submitted
            </span>

            <span>
              {item.submitted}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4">

            <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium">
              {item.approve}
            </button>

            <button className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium">
              {item.reject}
            </button>

          </div>

        </div>
      </div>
    ))}
  </div>
</div>
  );
}