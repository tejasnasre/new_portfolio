import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import projects from "./projects";
import { Link } from "react-router";
import { BsArrowUpRight } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  url: string;
  repo: string | null;
}

const Project: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="font-codefont w-full mx-auto p-8 bg-[#FEFFF0]"
      id="projects"
    >
      <motion.header
        variants={itemVariants}
        className="mb-12 flex items-center justify-center gap-2"
      >
        <h1 className="font-codefont text-4xl font-bold underline">
          My <span className="font-codefont border-black">Portfolio</span>
        </h1>
        <div className="text-5xl text-blue-400">❆</div>
      </motion.header>

      <motion.div
        variants={containerVariants}
        className="flex flex-wrap justify-center items-center gap-10 mb-10"
      >
        {currentProjects.map((item: Project) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="cursor-pointer group relative p-6 w-[25rem] h-80 transition ease-in-out duration-400 hover:scale-100 hover:border-black hover:shadow-[5px_-5px_0px_0px_rgb(0,0,0)]"
          >
            {/* Hand-drawn border effect */}
            <div className="h-80 absolute inset-0 border-4 border-black [mask-image:linear-gradient(45deg,transparent_32px,#000_32px)] before:absolute before:inset-[-2px] before:border-2 before:border-black before:content-[''] before:[mask-image:linear-gradient(-135deg,transparent_32px,#000_32px)] " />

            <div className="relative space-y-8">
              <div className="w-full h-full overflow-hidden rounded-sm border-2 border-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex items-start justify-between">
                <div className="font-codefont">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <div className="bg-black p-2 text-white rounded-full">
                    <Link to={item.url} target="_blank">
                      <BsArrowUpRight />
                    </Link>
                  </div>
                  {item.repo && (
                    <div className="bg-black p-2 text-white rounded-full">
                      <Link to={item.repo} target="_blank">
                        <IoLogoGithub />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Neo-Brutalist Pagination Controls */}
      <div className="flex justify-center items-center space-x-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`
            relative w-8 h-8 border-4 border-black 
            ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-white hover:bg-gray-100 active:translate-x-1 active:translate-y-1"
            }
            flex items-center justify-center 
            font-bold text-black 
            transition-all duration-200 ease-in-out
            before:absolute before:inset-[-6px] before:border-4 before:border-black before:z-[-1]
            disabled:opacity-50
          `}
        >
          <FaChevronLeft className="text-2xl" />
        </button>

        <div className="bg-white border-4 border-black px-2 font-bold text-lg shadow-[5px_5px_0px_0px_rgb(0,0,0)]">
          Page {currentPage} of {totalPages}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`
            relative w-8 h-8 border-4 border-black 
            ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-white hover:bg-gray-100 active:translate-x-1 active:translate-y-1"
            }
            flex items-center justify-center 
            font-bold text-black 
            transition-all duration-200 ease-in-out
            before:absolute before:inset-[-6px] before:border-4 before:border-black before:z-[-1]
            disabled:opacity-50
          `}
        >
          <FaChevronRight className="text-2xl" />
        </button>
      </div>
    </motion.div>
  );
};

export default Project;
