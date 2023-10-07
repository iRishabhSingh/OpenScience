import HeroSection from "./HeroSection";
import Categories from "./Categories";
import ProjectSection from "./ProjectSection";
import Carousel from "./carousel";
const index = () => {
  return (
    <>
      <div className="flex flex-col">
        <HeroSection />
        <Carousel/>
        <Categories />
        <ProjectSection />
      </div>
    </>
  );
};

export default index;
