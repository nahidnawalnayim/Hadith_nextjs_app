import Image from "next/image";
import Sidebar from "./_components/sidebar";
import Navigation from "./_components/navigation";
import SideBar from "./_components/sidebar";
import Category from "./_components/category";
import Subcategories from "./_components/subcategories";

export default function Home() {
  return (
    <main className="">
      <div className="flex">
        <SideBar />
        <Navigation />     
        <Category />
        <Subcategories />
      </div>
    </main>
  );
}