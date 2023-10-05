import React from "react";
import Titlebar from "./Titlebar";
import ProjectDetails from "./ProjectDetails";

const Listing = () => {
  return (
    <div className="bg-gradient-to-b from-[#B7EFFB] to-[#FFF] py-10 px-1 flex flex-col gap-4">
      <Titlebar />
      <ProjectDetails />
    </div>
  );
};

export default Listing;
