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
          600: {
            perView: 2,
          },
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

  type ChildProps = {
    link: string;
    image: any;
    title: string;
    key: string | number;
  };
  const ChildComponent: React.FC<ChildProps> = ({
    link,
    image,
    title,
    key,
  }) => {
    return (
      <div className="glide__slide " key={key}>
        <p className=" sm:rounded-full text-center w-1/2 my-2">
          <Link href={link}>
            <img
              src={image}
              className="rounded-full w-24 sm:h-24 sm:w-24 flex items-center border-2 p-0"
            />
            <span>{title}</span>
          </Link>
        </p>
      </div>
    );
  };

  let categories = [
    {
      link: "/category/helmet",
      images: images.category.leather_bags.src,
      title: "Leather Bags",
    },
    {
      link: "/category/helmet",
      images: images.category.engine_oil.src,
      title: "Engine Oil",
    },
    {
      link: "/category/helmet",
      images: images.category.chain_lube.src,
      title: "Chain Lube",
    },
    {
      link: "/category/helmet",
      images: images.category.helmet.src,
      title: "Helmet",
    },
    {
      link: "/category/helmet",
      images: images.category.horns.src,
      title: "Horn",
    },
    {
      link: "/category/helmet",
      images: images.category.chain_cleaner.src,
      title: "Chain Cleaner",
    },
  ];
  return (
    <div ref={sliderRef} className="w-[77%] sm:w-[94%]">
      <div className="glide__track !p-0" data-glide-el="track">
        <div className="glide__slides">
          {categories.map((item, i) => (
            <ChildComponent
              key={i}
              title={item.title}
              image={item.images}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
