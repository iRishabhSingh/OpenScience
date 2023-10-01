import React from "react";
import Navbar from "../components/Layout/Navbar";
// import pic1 from "../assets/1.jpg";
// import pic2 from "../assets/2.jpg";
// import pic3 from "../assets/3.jpg";
const HomePage = () => {
  return (
    <>
    
      <div className="bg-gradient-to-b from-[#B7EFFB] to-white flex flex-col pl-5 pr-5">
        <div className="flex h-112">
          <div className="flex flex-col w-2/3 items-center justify-center p-3">
            {/* <div className="flex h-60 w-fit border-2">
                <img src={pic1} className="h-44 w-44 rounded-full"></img>
                <img src={pic2} className="h-56"></img>
                </div>
                <div className="flex h-44 w-52" >
                <img src = {pic3}></img>
              </div> */}
          </div>
          <div className="flex w-1/3 ">
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
        <div className="flex h-96 ">
          <div className="w-2/3 pl-10 pr-10 flex flex-col">
            <h1 className="text-3xl font-bold 2w-80">
              What's great about us?
            </h1>
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
          <div>

          </div>
        </div>
        <div className="flex h-112">
          <div className="flex flex-col w-1/2 items-center justify-center p-3">
              <h1>Explore Open Science projects...</h1>
              <div>

              </div>
          </div>
          <div className="flex w-1/2">
              <img></img>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HomePage;
