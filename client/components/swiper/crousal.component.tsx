"use client";
import images from "@/utils/images.service";
import Glide from "@glidejs/glide";
import React, { useEffect, useRef } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

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
        <div className="glide__slides h-[11rem] sm:h-full">
          <div className="glide__slide ">
            <div className="flex flex-col w-full md:items-start  tracking-wide  sm:h-full">
              <img
                src={images.crousal.main_2.src}
                className="w-full h-full sm:h-[20rem]"
              />
            </div>
          </div>
          <div className="glide__slide ">
            <div className="flex flex-col w-full md:items-start  tracking-wide  sm:h-full">
              <img
                src={images.crousal.main_3.src}
                className="w-full h-full sm:h-[20rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="glide__arrows flex items-center justify-between relative bottom-[5rem] sm:bottom-[10rem] px-2 bg-transparent"
        data-glide-el="controls"
      >
        <button
          className="glide__arrow glide__arrow--left rounded-lg hover:bg-gray-200"
          data-glide-dir="<"
        >
          <FaRegArrowAltCircleLeft className=" text-black text-3xl" />
        </button>
        <button
          className="glide__arrow glide__arrow--right rounded-lg hover:bg-gray-200"
          data-glide-dir=">"
        >
          <FaRegArrowAltCircleRight className=" text-black text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default CrousalComponent;
