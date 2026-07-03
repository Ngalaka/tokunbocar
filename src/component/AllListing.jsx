import { listing } from "@/lib/listing";
import Image from "next/image";
import React from "react";
export default function AllListing() {
  return (
    <>
      {/* Desktop view */}
      <div className="hidden md:block mt-6 w-full ">
        <h1 className="font-bold">Active finance plans</h1>
        <table className="w-full">
          <thead>
            <tr className="text-left text-black/40">
              <th className="py-4 px-4">Car</th>
              <th className="py-4 px-4">Dealer</th>
              <th className="py-4 px-4">Type</th>
              <th className="py-4 px-4">Price</th>
              <th className="py-4 px-4">Enquiries</th>
              <th className="py-4 px-4">Listed</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-4">Action</th>
            </tr>
          </thead>

          <tbody className="text-black/50 ">
            {listing.map((item) => (
              <tr key={item.id}>
                <td className="flex  justify-start items-start gap-4 py-2">
                  <Image
                    src={item.carimage}
                    width={20} 
                    height={20}
                    alt={item.cartitle}
                    className="w-10 h-10 object-cover"
                  />
                  <span className="text-sm">{item.car}</span>
                </td>
                <td className="py-2 px-4  text-sm">{item.dealer}</td>
                <td
                  className={`py-2 px-4 text-sm font-medium ${
                    item.type === "Tokunbo"
                      ? "text-green-600"
                      : item.type === "New"
                        ? "text-yellow-500"
                        : item.type === "Nig Used"
                          ? "text-blue-600"
                          : "text-gray-700"
                  }`}
                >
                  {item.type}
                </td>
                <td className="py-2 px-4  text-sm ">{item.price}</td>
                <td className="py-2 px-4  text-sm">{item.enquiries}</td>
                <td className="py-2 px-4  text-sm ">{item.listedat}</td>
                <td className="py-2 px-4  text-sm ">
                  <span
                    className={`flex-1 text-right font-medium ${
                      item.status === "Active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="">
                  <span
                    className={`text-right font-medium ${
                      item.view === "Approve"
                        ? "text-green-600"
                        : "text-red-600"
                    } px-4`}
                  >
                    {item.view}
                  </span>
                  <span
                    className={`text-right font-medium cursor-pointer ${
                      item.action === "Approve"
                        ? "text-green-600"
                         : item.action === "Remove"
                         ? "text-yellow-500"
                        : item.action === "Reject"
                          ? "text-blue-600"
                          : "text-gray-700"
                    }`}
                  >
                    {item.action}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Screen */}
      <div className="w-full block md:hidden mt-6 space-y-4">
        {listing.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-4"
          >
            <div className="space-y-4">
              {/* Car */}
              <div className="flex items-start">
                <span className="w-24 shrink-0 text-sm font-semibold text-gray-500">
                  Car
                </span>

                <div className="flex-1 flex items-center gap-3 min-w-0">
                  <Image
                    src={item.carimage}
                    width={40}
                    height={40}
                    alt={item.cartitle}
                    className="w-12 h-12 rounded-md object-cover flex-shrink-0"
                  />

                  <p className="font-medium text-gray-800 break-words">
                    {item.name}
                  </p>
                </div>
              </div>

              {/* Dealer */}
              <div className="flex items-start">
                <span className="w-24 shrink-0 text-sm font-semibold text-gray-500">
                  Dealer
                </span>

                <span className="flex-1 text-right text-gray-700 break-words">
                  {item.dealer}
                </span>
              </div>

              {/* Type */}
              <div className="flex items-start">
                <span className="w-24 shrink-0 text-sm font-semibold text-gray-500">
                  Type
                </span>

                <span className="flex-1 text-right text-gray-700 break-words">
                  {item.type}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center">
                <span className="w-24 shrink-0 text-sm font-semibold text-gray-500">
                  Price
                </span>

                <span className="flex-1 text-right font-bold text-blue-600">
                  {item.price}
                </span>
              </div>

              {/* Enquiries */}
              <div className="flex items-start">
                <span className="w-24 shrink-0 text-sm font-semibold text-gray-500">
                  Enquiries
                </span>

                <span className="flex-1 text-right wrap-break-word ">
                  {item.enquiries}
                </span>
              </div>

              {/* Listed */}
              <div className="flex items-start">
                <span className="w-24 shrink-0 text-sm font-semibold text-gray-500">
                  Listed
                </span>

                <span className="flex-1 text-right wrap-break-word">
                  {item.listedat}
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center">
                <span className="w-24 shrink-0 text-sm font-semibold text-gray-500">
                  Status
                </span>

                <span
                  className={`flex-1 text-right font-medium ${
                    item.status === "Active" ? "text-green-600" : "text-red-600"
                  } cursor-pointer`}
                >
                  {item.status}
                </span>
              </div>

              {/* Action */}
              <div className="flex items-start">
                <div className="flex justify-center items-center gap-2">

                  <button className="px-2 py-1 rounded-md bg-green-700 text-white text-xs">
                    Approve
                  </button>

                  <button className="px-2 py-1 rounded-md bg-red-500 text-white text-xs">
                    Reject
                  </button>

                  <button className=" px-2 py-1 rounded-md bg-red-800 text-white text-xs">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
