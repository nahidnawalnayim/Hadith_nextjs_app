"use client"
import { useGetCategoryQuery } from "@/context/urlSlice";
import Image from "next/image";

export default function Home() {
  const {data, isLoading, error} = useGetCategoryQuery("")
  return (
  

    <main className="flex min-h-screen flex-col">
     <h1> Hello </h1>
     {
      data?.map((cat)=> (
        <ul key={cat.cat_id}>
          <li>{cat.cat_name_en}</li>
        </ul>
      ))
     }
    </main>
   
  );
}
