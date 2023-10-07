import { NavLink } from "react-router-dom";
import pic1 from "../../assets/1.jpg";
import pic2 from "../../assets/2.jpg";
import pic3 from "../../assets/3.jpg";
import { motion } from "framer-motion";
import group1 from "../../assets/home/homepg-sec1.png";
const HeroSection = () => {
  return (
    <d>
      <div className="flex h-[80vh] items-center pl-10 pr-10">
        <div className="flex-1">
          <div className="flex gap-5 justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={pic1}
              className="w-32 h-32 md:w-56 md:h-56 rounded-full"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={pic2}
              className="w-32 h-32 md:w-56 md:h-56"
            />
          </div>
          <div className="flex justify-center mt-5">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={pic3}
              className="md:h-40"
            />
          </div>
        </div>
        <div className="flex w-1/2">
          <div className="flex flex-col justify-start">
            <p className="text-5xl text-start font-serif w-full pb-5">
              "Crafting Tomorrow's Breakthroughs Today: Explore Open Science"
            </p>
            <button className="mt-3 h-12 p-3 w-fit rounded-md bg-[#003366] text-white items-center font-serif">
              <NavLink to="/register">Join the Largest Community</NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-96 pl-10 pr-10 bg-white items-center">
        <div className="w-2/3 flex flex-col pl-10">
          <h1 className="text-4xl">What's great about us?</h1>
          <p className="text-xl mt-3 text-justify">
            “We pride ourselves on being the driving force behind a new era of
            Open Science collaboration. What truly sets us apart is our
            relentless commitment to fostering innovation and discovery. Our
            AI-powered platform is revolutionizing the way creators and
            collaborators connect. We provide personalized project
            recommendations, ensuring that your skills and passions find their
            perfect match. With seamless communication tools, we're breaking
            down boundaries and uniting brilliant minds worldwide.”
          </p>
          <div className="flex mt-5">
            <button className="flex text-white mr-5 h-10 bg-[#003366] w-32 p-2 text-lg items-center justify-center rounded-md font-serif">
              Be a Creator
            </button>
            <button className="flex text-white h-10 bg-[#003366] w-44 p-2 text-lg items-center justify-center rounded-md font-serif">
              Be a Collaborator
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <img src={group1} />
        </div>
      </div>
    </d>
  );
};

export default HeroSection;
