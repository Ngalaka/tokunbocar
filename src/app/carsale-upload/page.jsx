
import CarSaleUpload from "@/component/CarSaleUpload";
import SideMenu from "@/component/SideMenu";
import React from "react";

export default function page() {
  return (
    <>
      <div className="w-full min-h-screen flex">
        {/* Side Bar */}
        <div className="w-[20%]">
          <SideMenu />
        </div>

        {/* Platfor page */}
        <div className="w-full lg:w-[70%] p-4 ">
          <CarSaleUpload/>
        </div>
      </div>
    </>
  );
}
