import pic4 from "../../assets/4.jpg";
import { NavLink } from "react-router-dom";
const Projects = () => {
  const buttonLabels = [
    "Life Sciences & Biology",
    "Medicine & Healthcare",
    "Physical & Particle Research",
    "Astronomy & Space Exploration",
    "Chemistry & Materials Science",
    "Environmental Science",
    "Data Science & AI",
    "Social Sciences",
    "Archaeology & Anthropology",
    "Engineering & Technology",
  ];
  return (
    <div className="flex h-112 pl-20 pr-10 bg-white">
      <div className="flex flex-col w-2/3 justify-evenly">
        <h1 className="flex text-3xl">Explore Open Science projects...</h1>
        <div className="flex w-full h-88 ">
          <div className="flex flex-col w-1/2 ">
            {buttonLabels.slice(0, 5).map((label, index) => (
              <button
                key={index}
                className="flex w-72 p-3 rounded-md h-12 bg-[#B7EFFB] mt-3 border-2 border-black items-center"
              >
                <NavLink
                  to={`/${label.replace(/ /g, "-")}`}
                  className="text-md"
                >
                  {label}
                </NavLink>
              </button>
            ))}
          </div>
          <div className="flex flex-col w-1/2 ">
            {buttonLabels.slice(5, 10).map((label, index) => (
              <button
                key={index}
                className="flex w-72 p-3 rounded-md h-12 bg-[#B7EFFB] mt-3 border-2 border-black items-center"
              >
                <NavLink
                  to={`/${label.replace(/ /g, "-")}`}
                  className="text-md"
                >
                  {label}
                </NavLink>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-1/2">
        <img src={pic4} className="h-3/4 m-auto rounded-lg"></img>
      </div>
    </div>
  );
};

export default Projects;
