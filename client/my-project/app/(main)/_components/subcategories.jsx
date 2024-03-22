"use client";
import { useGetDuasQuery } from "@/context/urlSlice";
import React from "react";
import Image from "next/image";

const Subcategories = () => {
  const { data, isLoading, error } = useGetDuasQuery("");

  return (
    <div className="flex left-[33%] top-28 bg-white rounded-xl absolute w-[900px] h-[600px] overflow-y-auto">
      <div>
        {data?.map((dua) => (
          <section className="text-gray-600 body-font" key={dua.dua_id}>
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap -m-12">
                <div className="p-12 flex flex-col items-start">
                  <span className="inline-block py-1 px-2 rounded text-green-600 text-sm font-medium tracking-widest">
                    {
                      <span>{ dua.dua_name_en}</span>
                    }
                  </span>
                 
                  <p className="leading-relaxed mb-8">
                    {
                        <div>
                            {dua.top_en}
                        </div>
                    }
                  </p>
                  <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                    <a className="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                  <a className="inline-flex items-center">
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Holden Caulfield
                      </span>
                      <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                        UI DEVELOPER
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Subcategories;
