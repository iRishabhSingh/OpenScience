import { NavLink } from "react-router-dom";
import pic1 from "../../assets/1.jpg";
import pic2 from "../../assets/2.jpg";
import pic3 from "../../assets/3.jpg";
import { motion } from "framer-motion";
import { Button, ButtonGroup, Divider } from "@nextui-org/react";
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
            <Button variant="flat" color="primary" className="mt-4 w-1/2">
              <NavLink to="/register">Join the Largest Community</NavLink>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Button>
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
            <ButtonGroup color="primary">
              <Button>Be a Creator</Button>
              <Divider orientation="vertical" className="bg-black" />
              <Button>Be a Collaborator</Button>
            </ButtonGroup>
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
