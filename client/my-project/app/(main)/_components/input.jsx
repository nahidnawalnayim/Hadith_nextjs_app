import React from 'react'
import { FaSearch } from "react-icons/fa";

const Input = () => {
  return (
    <div>
         <div className=''>
          <div className="flex items-center">
            <div className="flex rounded bg-white items-center p-2">
              <input
                className=" w-full text-md border-none bg-transparent px-6 text-gray-400 outline-none focus:outline-none "
                type="search"
                name="search"
                placeholder="Search by Dua name"
              />
              <div className="p-2 rounded-md bg-gray-200">
              <FaSearch color="gray" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Input