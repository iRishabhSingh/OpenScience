import React from "react";
import HeroSection from "./HeroSection";
import Searchbar from "./Searchbar";
import CreateFeed from "./CreateFeed";
import ProjectSection from "./ProjectSection";
import TopCollaborators from "./TopCollaborators";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#B7EFFB] to-[#FFF]">
        <HeroSection />
        <div className="flex justify-between px-3 md:px-10 pt-5 py-10">
          <Searchbar />
          <CreateFeed />
        </div>
      </div>
      <ProjectSection />
      <TopCollaborators />
    </>
  );
};

export default Dashboard;
