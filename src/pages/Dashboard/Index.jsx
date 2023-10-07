import { useState } from "react";
import HeroSection from "./HeroSection";
import Searchbar from "./Searchbar";
import CreateFeed from "./CreateFeed";
import ProjectSection from "./ProjectSection";
import TopCollaborators from "./TopCollaborators";
import CollaboratorSection from "./CollaboratorSection";

const Dashboard = () => {
  const [collaborator, setCollaborator] = useState(true);
  return (
    <div className="">
      <div className="">
        <HeroSection />
        <div className="flex justify-between px-3 md:px-10 pt-5 py-10">
          <Searchbar />
          <CreateFeed />
        </div>
        <button
          type="button"
          className="text-black bg-rose-500 px-5 py-2 ml-10 rounded"
          onClick={() => setCollaborator(!collaborator)}
        >
          click here to see - collaborator Status :{" "}
          {collaborator ? "True" : "False"}
        </button>
      </div>
      {collaborator ? <CollaboratorSection /> : <ProjectSection />}
      <TopCollaborators />
    </div>
  );
};

export default Dashboard;
