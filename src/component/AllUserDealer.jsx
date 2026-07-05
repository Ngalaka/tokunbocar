"use client";
import React from "react";
import { IoShieldOutline } from "react-icons/io5";
import { FaListOl } from "react-icons/fa";
import { RiPassPendingFill } from "react-icons/ri";
import { GiSellCard } from "react-icons/gi";
export default function AllUserDealer() {
  const alluser = [
    {
      id: 1,
      icon: FaListOl,
      dealer: "Chukwuemaka K.",
      email: "chukwuemaka@gmail.com",
      phone: "07039325432",
      location: "Ojota",
      joined: "jan 2026",
      enquiries: 2,
      status: "Verified",
      action: "Subpend",
      view: "View",
    },
    {
      id: 2,
      icon: GiSellCard,
      dealer: "Amina Yusuf",
      email: "aminayusuf@gmail.com",
      phone: "0804536657",
      location: "Lekki",
      joined: "Mar 2025",
      enquiries: 1,
      status: "Pending",
      action: "Review",
      view: "View",
    },

    {
      id: 3,
      icon: RiPassPendingFill,
      dealer: "Ngalaka Gift",
      email: "ngalakagift@gmail.com",
      phone: "07039307654",
      location: "Rivers",
      joined: "july 2026",
      enquiries: 2,
      status: "Unverified",
      action: "Subpend",
      view: "Verify",
    },
    {
      id: 4,
      icon: IoShieldOutline,
      dealer: "Ngalaka Gift",
      email: "ngalakagift@gmail.com",
      phone: "07039307654",
      location: "Rivers",
      joined: "july 2026",
      enquiries: 2,
      status: "Unverified",
      action: "Subpend",
      view: "Verify",
    },
  ];
  return (
    <>
      {/* Desktop view */}
      <div className="hidden md:block mt-6 w-full  ">
        <div className="flex justify-between items-center gap-2 px-4">
          <h1 className="font-bold">All Dealers</h1>
          <span className="text-black/40">View all</span>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-left text-black/40">
              <th className="py-4 px-4">Dealer</th>
              <th className="py-4 px-4">Phone</th>
              <th className="py-4 px-4">Location</th>
              <th className="py-4 px-4">Joined</th>
              <th className="py-4 px-4">Enquiries</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-4">Action</th>
            </tr>
          </thead>

          <tbody className="text-black/50 ">
            {alluser.map((item) => {
              const Icon = item.icon;

              return (
                <tr
                  key={item.id}
                  className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow"
                >
                  <td className="flex  justify-start items-start gap-4 py-2">
                    <Icon size={20} className="text-blue-800" />
                    <div>
                      <span className="text-sm">{item.dealer}</span>
                      <span className="text-sm">{item.email}</span>
                    </div>
                  </td>
                  <td className="py-2 px-4  text-sm">{item.phone}</td>
                  <td className="py-2 px-4  text-sm">{item.location}</td>
                  <td className="py-2 px-4  text-sm">{item.joined}</td>
                  <td className="py-2 px-4  text-sm">{item.enquiries}</td>
                  <td
                    className={`py-2 px-4 text-sm font-medium ${
                      item.status === "Verified"
                        ? "text-green-600"
                        : item.status === "Unverified"
                          ? "text-blue-500"
                          : item.status === "Pending"
                            ? "text-yellow-500"
                            : item.type === "Subpend"
                              ? "text-red-600"
                              : "text-gray-700"
                    }`}
                  >
                    {item.status}
                  </td>

                  <td className="">
                    <div>
                      <span
                        className={`text-right font-medium ${
                          item.view === "Verify"
                            ? "text-green-600"
                            : "text-red-600"
                        } px-4`}
                      >
                        {item.view}
                      </span>

                      <span
                        className={`text-right font-medium cursor-pointer ${
                        item.action === "Subpend"
                          ? "text-red-600"
                          : item.action === "Restore"
                            ? "text-yellow-500"
                            : item.action === "Review"
                              ? "text-blue-600"
                              : "text-gray-00"
                      }`}
                    >
                      {item.action}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Screen */}
      <div className="block md:hidden mt-6 space-y-4">
        {alluser.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-2 border border-gray-100"
            >
              {/* Top Section */}
              <div className="flex justify-between items-center gap-2 pb-4 py-2">
                <div className="bg-blue-50 p-2 rounded-full flex-shrink-0">
                  <Icon size={20} className="text-blue-700" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 break-words">
                    {item.dealer}
                  </h3>

                  <p className="text-sm text-gray-500 break-all">
                    {item.email}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center space-y-4 py-2">
                <span className="font-medium text-gray-500">Phone</span>

                <span className="text-gray-800">{item.phone}</span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-500">Location</span>

                <span className="text-gray-800">{item.location}</span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-500">Joined</span>

                <span className="text-gray-800">{item.joined}</span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-500">Enquiries</span>

                <span className="text-gray-800">{item.enquiries}</span>
              </div>

              {/* Details */}
              <div className="mt-4 space-y-4 text-sm py-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-500">Status</span>

                  <span
                    className={`py-2 px-4 text-sm font-medium ${
                      item.status === "Verified"
                        ? "text-green-600"
                        : item.status === "Unverified"
                          ? "text-blue-500"
                          : item.status === "Pending"
                            ? "text-yellow-500"
                            : item.type === "Subpend"
                              ? "text-red-600"
                              : "text-gray-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-500">Action</span>

                  <div>
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
                        item.action === "Subpend"
                          ? "text-red-600"
                          : item.action === "Restore"
                            ? "text-yellow-500"
                            : item.action === "Review"
                              ? "text-blue-600"
                              : "text-gray-00"
                      }`}
                    >
                      {item.action}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
