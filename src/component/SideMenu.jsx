"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoShieldOutline } from "react-icons/io5";
import { FaChevronLeft, FaBars } from "react-icons/fa";

export default function SideMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  const menuItems = [
    {
      id: 1,
      title: "Dashboard",
      path: "/",
      icon: IoShieldOutline,
    },
    {
      id: 2,
      title: "Cars",
      path: "/cars",
      icon: IoShieldOutline,
    },
    {
      id: 3,
      title: "Users",
      path: "/users",
      icon: IoShieldOutline,
    },
    {
      id: 4,
      title: "Settings",
      path: "/settings",
      icon: IoShieldOutline,
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
              ? "translate-x-0 w-55"
              : "-translate-x-full lg:translate-x-0 lg:w-40"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-blue-800">
          <div className="flex items-center gap-3">
            <IoShieldOutline size={24} />

            {/* Show text only when sidebar is open */}
            <Link
              href="/"
              className={`${isNavOpen ? "block" : "hidden"} lg:block font-bold w-full`}
            >
              Used-Cars
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