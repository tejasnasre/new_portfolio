"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import projects from "./projects";
import { Link } from "react-router";
import { BsArrowUpRight } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";

interface project {
  id: number;
  image: string;
  title: string;
  description: string;
  url: string;
  repo: string;
}

const Project: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
      className="w-full mx-auto p-8 bg-[#FEFFF0]"
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
        className="flex flex-wrap justify-center items-center gap-10"
      >
        {projects.map((item: project) => (
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
                    <Link to={item.url} target="_blanck">
                      <BsArrowUpRight />
                    </Link>
                  </div>
                  <div className="bg-black p-2 text-white rounded-full">
                    <Link to={item.repo} target="_blanck">
                      <IoLogoGithub />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Project;
