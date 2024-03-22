import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Input from "./input";

const Navigation = () => {
  return (
    <div className="flex w-full h-20 mt-10 justify-between">
        <div>
      <h1 className="text-xl pl-2">Duas page</h1>
        </div>
      
     <Input />
      
        <div className="w-10 mr-16">
            <Image src="/profile.svg" alt="profile" width={40} height={30} />
        </div>

    </div>
  );
};

export default Navigation;
