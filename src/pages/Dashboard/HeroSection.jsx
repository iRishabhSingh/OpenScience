import React from "react";
import img1 from "../../assets/dashboard/HeroImg1.png";
import img2 from "../../assets/dashboard/HeroImg2.png";
import img3 from "../../assets/dashboard/HeroImg3.png";
const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#B7EFFB] to-[#FFF]">
      <div className="w-full flex flex-col md:flex-row p-5 md:p-10 lg:p-20">
        <div className="flex-1 w-1/2">
          <div className="flex gap-5 justify-center">
            <img src={img1} className="w-56 h-56" />
            <img src={img2} className="w-56 h-56" />
          </div>
          <div className="flex justify-center mt-5">
            <img src={img3} className=" h-56" />
          </div>
        </div>
        <div className="flex-1 w-1/2">
          <h2 className="font-bold text-3xl text-center ">
            "Learn How to COLLABORATE <br /> and Contribute"
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
