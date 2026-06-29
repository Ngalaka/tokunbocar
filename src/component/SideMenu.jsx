"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaBars } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import { GiFlatPlatform } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { CgUserList } from "react-icons/cg";
import { RiInformationOffFill } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";

export default function SideMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  const menuItems = [
    {
      id: 1,
      title: "Platform Overview",
      path: "/platform",
      icon: GiFlatPlatform,
    },
    {
      id: 2,
      title: "Dealer Dashboard",
      path: "/cars",
      icon: LuLayoutDashboard,
    },
    {
      id: 3,
      title: "Upload Car",
      path: "/upload",
      icon:ImUpload,
    },
    {
      id: 4,
      title: "All users",
      path: "/users",
      icon: LuUsers,
    },
    {
      id: 5,
      title: "All listing",
      path: "/listing",
      icon: CgUserList,
    },
    {
      id: 6,
      title: "Enquiries",
      path: "/enquiries",
      icon: RiInformationOffFill,
    },
     {
      id: 7,
      title: "Finance Plans",
      path: "/finance",
      icon: GrMoney,
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={handleNavOpen}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-900 text-white lg:hidden"
      >
        <FaBars size={20} />
      </button>

      {/* Overlay */}
      {isNavOpen && (
        <div
          onClick={handleNavOpen}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0
          h-screen
          bg-blue-900
          text-white
          border-r
          z-50
          transition-all
          duration-300

          ${
            isNavOpen
              ? "translate-x-0 w-64"
              : "-translate-x-full lg:translate-x-0 lg:w-60"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 border-b  border-blue-800">
          <div className="flex items-center gap-3">
           
            {/* Show text only when sidebar is open */}
            <Link
              href="/"
              className={`${isNavOpen ? "block" : "hidden"} lg:block font-bold w-full`}
            >
              <h1 className="font-bold text-2xl">LAGOS</h1>
              <div className="flex justify-start items-start gap-4">
              <span><IoCarSportOutline size={20} /></span>
              <span className="font-semibold text-sm">Used-Cars</span>
              </div>

            </Link>
          </div>

          {/* Desktop collapse button */}
          <button
            onClick={handleNavOpen}
            className="hidden lg:block "
          >
            <FaChevronLeft
              className={`transition-transform ${
                !isNavOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Menu */}
        <div className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.path}
                className="flex items-center gap-4 px-5 py-4 hover:bg-blue-800 transition-colors"
              >
                <Icon size={22} />

                <span
                  className={`${isNavOpen ? "block" : "hidden"} lg:block`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </aside>
    </>
);
}