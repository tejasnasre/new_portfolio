"use client";

import React, { useRef } from "react";
import { Hash, Plus, Star, MapPin, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const ServicesGrid: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      icon: Star,
      title: "Frontend Development",
      description:
        "Crafting responsive, interactive, and modern web applications using HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and TailwindCSS.",
    },
    {
      icon: Hash,
      title: "Backend Development",
      description:
        "Building robust and scalable backend solutions using Node.js, Express.js, and modern server-side libraries.",
    },
    {
      icon: MapPin,
      title: "Database Management",
      description:
        "Designing and managing databases with MongoDB, Supabase, and PostgreSQL to ensure data integrity and performance.",
    },
    {
      icon: Plus,
      title: "API Development & Integration",
      description:
        "Creating and integrating RESTful and GraphQL APIs for seamless communication between services and applications.",
    },
    {
      icon: Hash,
      title: "UI/UX Implementation",
      description:
        "Delivering visually appealing and user-centric interfaces with expertise in TailwindCSS and ShadCN components.",
    },
    {
      icon: Star,
      title: "Custom Libraries & Frameworks",
      description:
        "Utilizing and integrating third-party libraries to enhance functionality and streamline development workflows.",
    },
  ];

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
    <div className="font-codefont bg-[#FEFFF0] w-full mx-auto p-10 md:px-36 py-28">
      <motion.div
        ref={ref}
        className="relative"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="mb-12" variants={itemVariants}>
          <h2 className="text-4xl font-black mb-2 inline-block border-b-4 border-black">
            Services I Provide
          </h2>
          <span className="ml-2 text-4xl">🚀</span>
          <p className="text-xl font-bold">
            Empowering projects with 100% commitment and expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[200px_1fr] gap-28">
          {/* Stats */}
          <div className="space-y-8">
            <motion.div
              className="border-4 border-black p-4 bg-[#FEFFF0] transition ease-in-out duration-400 hover:scale-100 hover:border-black hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)]"
              variants={itemVariants}
            >
              <div className="text-4xl font-black">10+</div>
              <div className="font-bold">Projects</div>
            </motion.div>
            <motion.div
              className="border-4 border-black p-4 bg-[#FEFFF0] transition ease-in-out duration-400 hover:scale-100 hover:border-black hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)]"
              variants={itemVariants}
            >
              <div className="text-4xl font-black">400+</div>
              <div className="font-bold">Users Impacted</div>
            </motion.div>
          </div>

          {/* Services Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-[#FEFFF0] border-4 border-black p-6 transition ease-in-out duration-400 hover:scale-100 hover:border-black hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)]"
                variants={itemVariants}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center bg-red-200">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <button className="font-bold relative inline-block transition-transform hover:translate-y-1 hover:-translate-x-1 active:translate-x-0 active:translate-y-0">
                  Learn more
                  <div className="absolute bottom-0 left-0 w-full border-b-2 border-black" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={itemVariants}
        className="border-4 border-black p-6 md:p-8 bg-gradient-to-r from-yellow-100 to-yellow-50 text-center hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition-shadow mt-24"
      >
        <h3 className="text-2xl font-bold mb-3">
          Interested in working together?
        </h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Let’s talk about how I can contribute to your team or project.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 border-4 border-black bg-black text-white px-6 py-3 font-bold hover:bg-white hover:text-black transition-colors"
        >
          Get in Touch <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  );
};

export default ServicesGrid;
