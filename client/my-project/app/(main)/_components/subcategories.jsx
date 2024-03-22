"use client";
import { useGetCategoryQuery, useGetDuasQuery } from "@/context/urlSlice";
import React, { useState } from "react";
import Image from "next/image";

const Subcategories = ({id, topEn}) => {
  const { data, isLoading, error } = useGetDuasQuery("");
  const {data: category} = useGetCategoryQuery("")
  const [selectedCategory, setSelectedCategory] = useState(null);



  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  return (
      <div className="flex left-[33%] top-44 bg-white rounded-xl absolute w-[900px] h-[600px] overflow-y-auto">
        {
            category?.map((cat)=>(

        <div key={cat.cat_id} onClick={()=> handleCategorySelect(cat.cat_id)}>
          {
            <div>
                {selectedCategory === cat.cat_id && (
              <div >
                {data
                  ?.filter((datas) => datas.cat_id === cat.cat_id)
                  .map((value) => (
                    <div key={value.dua_id}>
                      {
                        <p>
                          {
                            value.top_en
                          }
                        </p>
                      }
                    </div>
                  ))}
              </div>
                )}
            </div>
          }
        </div>
            ))
        }
      </div>
  );
};

export default Subcategories;
