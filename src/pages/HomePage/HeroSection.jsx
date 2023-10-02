import React from "react";
import pic1 from "../../assets/1.jpg";
import pic2 from "../../assets/2.jpg";
import pic3 from "../../assets/3.jpg";
const HeroSection = () => {
  return (
    <>
      <div className="flex h-112 bg-gradient-to-b from-[#B7EFFB] to-white pl-10 pr-10">
        <div className="flex-1">
          <div className="flex gap-5 justify-center">
            <img
              src={pic1}
              className="w-32 h-32 md:w-56 md:h-56 rounded-full"
            />
            <img src={pic2} className="w-32 h-32 md:w-56 md:h-56" />
          </div>
          <div className="flex justify-center mt-5">
            <img src={pic3} className="md:h-40" />
          </div>
        </div>
        <div className="flex w-1/3">
          <div className="flex flex-col h-48 w-3/4 m-auto p-2 justify-center">
            <p className="font-bold text-2xl justify-center font-serif">
              "Crafting Tomorrow's Breakthroughs Today: Explore Open Science"
            </p>
            <button className="mt-3 h-12 w-56 rounded-md bg-[#003366] text-white items-center font-serif">
              Join the Largest Community
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-96 pl-10 pr-10 bg-white">
        <div className="w-2/3 flex flex-col">
          <h1 className="text-3xl font-bold 2w-80">What's great about us?</h1>
          <p className="text-2xl mt-3">
            “We pride ourselves on being the driving force behind a new era of
            Open Science collaboration. What truly sets us apart is our
            relentless commitment to fostering innovation and discovery. Our
            AI-powered platform is revolutionizing the way creators and
            collaborators connect. We provide personalized project
            recommendations, ensuring that your skills and passions find their
            perfect match. With seamless communication tools, we're breaking
            down boundaries and uniting brilliant minds worldwide.”
          </p>
          <div className="flex mt-3">
            <button className="flex text-white mr-5 h-10 bg-[#003366] w-32 p-2 text-lg items-center justify-center rounded-md font-serif">
              Be a Creator
            </button>
            <button className="flex text-white h-10 bg-[#003366] w-44 p-2 text-lg items-center justify-center rounded-md font-serif">
              Be a Collaborator
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
