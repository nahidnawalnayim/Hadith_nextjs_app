"use client";
import React from "react";
import Image from "next/image";
import {
  IconContext,
  FaHome,
  FaRegLightbulb,
  FaRegListAlt,
  FaRegBookmark,
  FaRocketchat,
  FaBook,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { VscDiffAdded } from "react-icons/vsc";
const Sidebar = () => {
  return (
    <div className="w-32">
      <aside className="border-solid border-2 shadow-sm rounded-xl bg-white h-[650px] w-20 flex flex-col items-center m-9 text-xl">
        <div className="flex flex-col gap-4 p-3">
          <div>
            <Image src="/dua-logo.svg" alt=" arrow " width={50} height={50} />
          </div>
          <div className="bg-gray-200 p-3 rounded-full mt-8">
            <FaHome color="gray" />
          </div>
          <div className="bg-gray-200 p-3 rounded-full">
            <FaRegLightbulb color="gray" />
          </div>
          <div className="bg-gray-200 p-3 rounded-full">
            <FaRegListAlt color="gray" />
          </div>
          <div className="bg-gray-200 p-3 rounded-full">
            <FaRegBookmark color="gray" />
          </div>
          <div className="bg-gray-200 p-3 rounded-full">
            <VscDiffAdded color="gray" />
          </div>
          <div className="bg-gray-200 p-3 rounded-full">
            <FaRocketchat color="gray" />
          </div>
         <div className="bg-gray-200 p-3 rounded-full">           
            <FaBook color="gray" />
          </div>
          <div className="bg-green-600 p-3 rounded-md mt-7">
            <FaHandHoldingHeart color="white" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
