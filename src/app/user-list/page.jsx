"use client";
import SideMenu from "@/component/SideMenu";
import React from "react";
import { IoShieldOutline } from "react-icons/io5";
import { FaListOl } from "react-icons/fa";
import { RiPassPendingFill } from "react-icons/ri";
import { GiSellCard } from "react-icons/gi";
import UserList from "@/component/UserList";
import Platform from "@/component/Platform";
import UserListMenu from "@/component/UserListMenu";

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
                {/*  */}
                <UserListMenu/>
            </div>
         <div>
            <UserList/>
         </div>
        </div>
      </div>
    </>
  );
}
