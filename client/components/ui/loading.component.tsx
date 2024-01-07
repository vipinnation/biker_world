import images from "@/utils/images.service";
import React from "react";

type Props = {};

const LodingComponent = (props: Props) => {
  return (
    <div className="flex items-center h-[80vh] justify-center bg-gray-100">
      <div className="w-1/4 logo-anime mx-auto text-center">
        <img src={images.logo.src} className="" />
        <span className="text-3xl text-center ml-4">Loading ...</span>
      </div>
    </div>
  );
};

export default LodingComponent;
