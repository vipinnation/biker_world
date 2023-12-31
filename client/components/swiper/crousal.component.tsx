"use client";
import images from "@/utils/images.service";
import Glide from "@glidejs/glide";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const CrousalComponent = () => {
  const ref = useRef<any>();

  useEffect(() => {
    var glide = new Glide(ref.current, {
      autoplay: false,
      type: "carousel",
      startAt: 0,
      perView: 1,
    }).mount();

    glide.play(5000);

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div className="glide " ref={ref}>
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides ">
          <div className="glide__slide ">
            <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center justify-center md:items-start  tracking-wide">
              <img src={images.crousal.main_2.src} className="max-w-[150%]" />
            </div>
          </div>
          <div className="glide__slide ">
            <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center  justify-center  md:items-start  tracking-wide">
              <img src={images.crousal.main_3.src} className="max-w-[150%]" />
            </div>
          </div>
          {/* <div className="glide__slide ">
            <div>
              <img src={images.crousal.main_3.src} />
            </div>
          </div> */}
          {/* <div className="glide__slide ">
            <div className="block  w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover  ">
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-16  tracking-wide">
                  <img src={images.crousal.main_2.src} />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button
          className="glide__arrow glide__arrow--left hover:bg-gray-200"
          data-glide-dir="<"
        >
          <i className="fa fa-chevron-left text-black " aria-hidden="true"></i>
        </button>
        <button
          className="glide__arrow glide__arrow--right hover:bg-gray-200"
          data-glide-dir=">"
        >
          <i
            className="fa fa-chevron-right text-black  "
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
  );
};

export default CrousalComponent;
