"use client";
import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import images from "@/utils/images.service";
import Link from "next/link";

const SwiperComponent = () => {
  const sliderRef = useRef<any>();

  useEffect(() => {
    mountSlider();
  }, []);

  const mountSlider = () => {
    try {
      var productSlide = new Glide(sliderRef.current, {
        autoplay: false,
        type: "carousel",
        perView: 8,
        gap: 0,
        breakpoints: {
          800: {
            perView: 3,
          },
          1024: {
            perView: 8,
          },
        },
      }).mount();
      productSlide.play(3000);
    } catch (error) {}
  };
  return (
    <div ref={sliderRef} className="w-[94%]">
      <div className="glide__track !p-0" data-glide-el="track">
        <div className="glide__slides">
          <div className="glide__slide ">
            <p className=" rounded-full text-center w-1/2 my-2">
              <Link href="/category/helmet">
                <img
                  src={images.category.leather_bags.src}
                  className="rounded-full h-24 w-24 flex items-center border-2 p-1"
                />
                <span>Leather Bags</span>
              </Link>
            </p>
          </div>
          <div className="glide__slide ">
            <div className=" rounded-full text-center w-1/2 my-2">
              <Link href="/category/helmet">
                <img
                  src={images.category.engine_oil.src}
                  className="rounded-full h-24 w-24 flex items-center border-2 p-1"
                />
                <span>Engine Oil</span>
              </Link>
            </div>
          </div>
          <div className="glide__slide ">
            <div className=" rounded-full text-center w-1/2 my-2">
              <Link href="/category/helmet">
                <img
                  src={images.category.chain_lube.src}
                  className="rounded-full h-24 w-24 flex items-center border-2 p-1"
                />
                <span>Chain Lube</span>
              </Link>
            </div>
          </div>
          <div className="glide__slide ">
            <div className=" rounded-full text-center w-1/2 my-2">
              <Link href="/category/helmet">
                <img
                  src={images.category.helmet.src}
                  className="rounded-full h-24 w-24 flex items-center border-2 p-1"
                />
                <span>Helmet</span>
              </Link>
            </div>
          </div>
          <div className="glide__slide ">
            <div className=" rounded-full text-center w-1/2 my-2">
              <Link href="/category/horn">
                <img
                  src={images.category.horns.src}
                  className="rounded-full h-24 w-24 flex items-center border-2 p-1"
                />
                <span>Horn</span>
              </Link>
            </div>
          </div>
          <div className="glide__slide ">
            <div className="rounded-full w-1/2 my-2 text-center">
              <Link href="/category/chain clean">
                <img
                  src={images.category.chain_cleaner.src}
                  className="rounded-full h-24 w-24 flex items-center border-2 p-1"
                />
                <span>Chain Cleaner</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
