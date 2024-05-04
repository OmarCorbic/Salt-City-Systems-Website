import React, { useState } from "react";
import TiltCard from "./TiltCard";
import Modal from "./Modal";
import SingleProject from "./SingleProject";
import LakeSvg from "./LakeSvg";
import { afarmImages } from "../assets/projectImages";
import { tuzlaTaxiImages } from "../assets/projectImages";
import { useTheme } from "../hooks/useTheme";

const Projects = () => {
  const { darkMode } = useTheme();
  const [showSingleProject, setShowSingleProject] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const handleProjectClick = (id) => {
    setProjectIndex(Number(id));
    setShowSingleProject(true);
  };

  const projects = [
    {
      id: 0,
      photos: [
        ...afarmImages.map((src, i) => {
          return { src: src || "", alt: "AFARM image " + i };
        }),
      ],
      title: "A-FARM",
      description:
        "Developed a comprehensive Next.js e-commerce site for a herbal pharmacy. The site features a wide range of herbal products categorized by various health concerns, enabling customers to easily find natural remedies for their needs. Leveraged Next.js for a smooth and dynamic user experience.",
      technologies: ["react", "express", "nodejs", "mongodb"],
    },
    {
      id: 1,
      photos: [
        ...tuzlaTaxiImages.map((src, i) => {
          return { src: src || "", alt: "Tuzla Taxi image " + i };
        }),
      ],
      title: "Tuzla Taxi",
      description:
        "A client project I developed for a local taxi company in Tuzla. This website enables customers to conveniently book taxis through a user-friendly form. As the developer, I optimized the site for a seamless booking experience and enhanced the client's online presence.",
      technologies: ["tailwind", "react", "html", "css"],
    },
  ];

  return (
    <section
      id="projects"
      role="region"
      aria-labelledby="projects-heading"
      className="relative min-h-screen flex flex-col justify-center  items-center gap-14 text-sm lg:text-base  text-center"
    >
      <div className="absolute z-0 w-full scale-[2] sm:scale-100  flex items-center justify-center rotate-90 sm:rotate-180">
        <LakeSvg lake={3} fill={darkMode ? "#030017" : "#ade8f4"} />
      </div>
      <div className="flex flex-col gap-5 w-full items-center z-10 px-5">
        <h2
          id="projects-heading"
          className="font-black text-xl sm:text-2xl md:text-3xl"
        >
          OUR{" "}
          <span className="dark:text-darkAccent text-lightAccent">
            PROJECTS
          </span>
        </h2>
        <p className=" w-full max-w-[600px] px-5">
          We present you a collection of our latest web development projects.
          From dynamic e-commerce platforms to sleek corporate websites, our
          projects demonstrate the fusion of design, functionality, and user
          experience.
        </p>
      </div>
      <div className="w-full justify-center  flex flex-wrap gap-5 ">
        {showSingleProject && (
          <Modal onClose={() => setShowSingleProject(false)}>
            <SingleProject project={projects[projectIndex]} />
          </Modal>
        )}
        {projects?.map((project, i) => {
          return (
            <button
              key={i}
              className="w-full sm:w-auto z-10"
              id={project.id}
              onClick={() => handleProjectClick(project.id)}
            >
              <TiltCard className="sm:w-[500px] flex-grow  h-[300px] sm:min-h-[300px]  rounded-sm border">
                <div className="absolute top-0 left-0 w-full  h-full">
                  <img
                    className="object-cover w-full h-full"
                    src={project.photos[0].src}
                    alt="Project showcase photo"
                  />
                </div>
              </TiltCard>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;