"use client";
import React, { useState } from "react";
import BuyerSignUp from "@/component/BuyerSignUp";
import SellerSignUp from "@/component/SellerSignUp";
import Admin from "@/component/Admin";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
export default function Page() {
  const [userRole, setUserRole] = useState("buyerRole");

  // function for Role

  const handleRoleChange = (role) => {
    setUserRole(role);
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        {/* user sign up roles */}
        <div className="w-full h-auto lg:w-full mx-auto py-4">
          <div className="full h-auto mx-auto text-center py-4 ">
            <h1 className="text-2xl font-semibold text-blue-800">
              Tokunbo Car Sign up
            </h1>
          </div>
          <div className="w-[90%] lg:w-[60%]  h-auto mx-auto flex flex-row justify-center items-center gap-2">
            {/* buyer role */}
            <div className="w-40 h-auto">
              <button
                onClick={() => handleRoleChange("buyerRole")}
                className={`px-4 py-4 rounded w-full cursor-pointer
                ${
                  userRole === "buyerRole"
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Buyer{" "}
              </button>
            </div>

            {/* seller Role */}
            <div className="w-40 h-auto">
              <button
                onClick={() => handleRoleChange("sellerRole")}
                className={`px-4 py-4 rounded w-full cursor-pointer
                ${
                  userRole === "sellerRole"
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Seller{" "}
              </button>
            </div>

            {/* admin Role */}
            <div className="w-40 h-auto">
              <button
                onClick={() => handleRoleChange("adminRole")}
                className={`px-4 py-4 rounded w-full cursor-pointer
                ${
                  userRole === "adminRole"
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Admin{" "}
              </button>
            </div>
          </div>
        </div>

        {/* using condition to chect the user role */}
        {userRole === "buyerRole" && <BuyerSignUp />}
        {userRole === "sellerRole" && <SellerSignUp />}
        {userRole === "adminRole" && <Admin />}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
