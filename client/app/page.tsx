"use client";

import CrousalComponent from "@/components/swiper/crousal.component";
import SwiperComponent from "@/components/swiper/swiper.component";
import images from "@/utils/images.service";
import Link from "next/link";
import { FaHamburger, FaLine, FaList } from "react-icons/fa";
import { FaLinesLeaning } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div className="mx-2 mt-4">
          <Link href="/categorylist" className="shadow-2xl ">
            <FaList className=" text-[4rem] sm:text-[5rem] sm:mb-2" />
            <span className="font-normal">Categories</span>
          </Link>
        </div>
        <SwiperComponent />
      </div>
      <CrousalComponent />
    </div>
  );
};

export default Home;
