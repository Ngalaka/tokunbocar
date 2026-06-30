import AllListing from "@/component/AllListing";
import List from "@/component/List";
import Platform from "@/component/Platform";
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
        <div className="w-[70%] p-4">
          <div>
            <Platform />
          </div>
          <div className="w-full h-auto py-16">
            <List />
            <div>
                <AllListing/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
