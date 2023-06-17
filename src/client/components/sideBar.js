'use client';
import React, { useState } from 'react';
import { MdAddRoad, MdMap, MdOutlineDashboard } from "react-icons/md";
import { RiGuideLine, RiMapPinAddLine, RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart, FiHome, FiMap, FiMapPin } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from 'next/link';

export default function SideBar() {
  const menus = [
    { name: "Accueil", link: "/home", icon: FiHome },
    { name: "Profil", link: "/home", icon: AiOutlineUser },
    { name: "Carte", link: "/Carte", icon: FiMap },
   // { name: "Statistique", link: "/", icon: TbReportAnalytics, },
    //{ name: "Ajout lieu", link: "/", icon: RiMapPinAddLine },
    { name: "Favoris", link: "/home", icon: AiOutlineHeart, },
    //{ name: "paramètres", link: "/", icon: RiSettings4Line },
  ];
  return (
    <section className="flex gap-6  bg-white ">
      <div
        className={`'h-[100vh] z-[1000] top-0 bg-white min-h-screen w-16 duration-500 text-gray-100 px-4 fixed drop-shadow'}`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            
          />
        </div>
        <div className={`mt-4 flex flex-col gap-4 relative `}>
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={` ${menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:border-b-2 border-b-[#FFAA8B] focus:border-b-2 focus:border-b-[#FFAA8B] `}
            >
              <div>{React.createElement(menu?.icon, { size: "20", color: "#B2B1B1" })}</div>

              <h2
                className={` absolute z-1000 left-48 bg-white font-semibold whitespace-pre text-[#7DADFE] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
