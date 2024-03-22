"use client";
import React, { useState } from "react";
import Input from "./input";
import {
  useGetCategoryQuery,
  useGetSubCategoryQuery,
} from "@/context/urlSlice";
import Subcategories from "./subcategories";

const Category = () => {
  const {
    data: categories,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGetCategoryQuery("");
  const {
    data: subcategories,
    isLoading: subcategoryLoading,
    error: subcategoryError,
  } = useGetSubCategoryQuery("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="flex left-36 top-28 bg-white rounded-xl fixed">
      <div className="w-[350px] flex flex-col">
        <div className="flex items-center justify-center h-10 bg-green-600 text-white rounded-t-xl text-lg">
          <h2>Category</h2>
        </div>
        <div className="border">
          <Input />
        </div>
        <div className="overflow-y-auto max-h-[500px]">
          {categories?.map((category) => (
            <div
              className="p-4 flex flex-col justify-between"
              key={category.cat_id}
            >
              <button
                onClick={() => handleCategorySelect(category.cat_id)}
                className="flex justify-between bg-gray-50 py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
              >
                <span className="ml-4 flex items-start flex-col leading-none">
                  <p className="text-sm text-gray-950 mb-1">
                    {category.cat_name_en}
                  </p>
                  <span className="title-font text-gray-600 text-xs font-medium">
                    Subcategory: {category.no_of_subcat}
                  </span>
                </span>
                <div>
                  <p className="text-xs">{category.no_of_dua}</p>
                </div>
              </button>
              {selectedCategory === category.cat_id && (
                <div>
                  {subcategories
                    ?.filter(
                      (subcategory) => subcategory.cat_id === category.cat_id
                    )
                    .map((subcategory) => (
                      <div key={subcategory.subcat_id}>
                        <li className="text-sm p-3 list-none">
                          <a href="">{subcategory.subcat_name_en}</a>
                        </li>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default Category;
