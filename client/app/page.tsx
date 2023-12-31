"use client";

import CrousalComponent from "@/components/swiper/crousal.component";
import SwiperComponent from "@/components/swiper/swiper.component";
import images from "@/utils/images.service";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div className="mx-2 my-2">
          <Link href="/categorylist" className="shadow-2xl">
            <img
              src={images.category.all_categories.src}
              className="h-24 w-30"
            />
            <span className="text-sm">Categories</span>
          </Link>
        </div>
        <SwiperComponent />
      </div>
      <CrousalComponent />
    </div>
  );
};

export default Home;
