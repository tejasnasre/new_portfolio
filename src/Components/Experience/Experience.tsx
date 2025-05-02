import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { experienceData } from "./experienceData";

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      id="experience"
      className="font-codefont bg-[#FEFFF0] w-full mx-auto p-5 md:p-10 lg:px-36 py-28"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-12">
        <h2 className="text-3xl md:text-4xl font-black mb-2 inline-block border-b-4 border-black">
          Professional Experience
        </h2>
        <span className="ml-2 text-4xl">💼</span>
        <p className="text-lg md:text-xl font-bold mt-4">
          My journey through the tech landscape.
        </p>
      </motion.div>

      {/* Summary */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
      >
        <SummaryCard
          icon={<Briefcase className="w-5 h-5" />}
          label="Positions Held"
          value={experienceData.length}
          bg="bg-blue-50"
        />
        <SummaryCard
          icon={<Calendar className="w-5 h-5" />}
          label="Month of Experience"
          value={"6"}
          bg="bg-green-50"
        />
        <SummaryCard
          icon={<MapPin className="w-5 h-5" />}
          label="Companies"
          value={"2"}
          bg="bg-yellow-50"
        />
      </motion.div>

      {/* Current Position Highlight */}
      {experienceData[0] && (
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-xl md:text-2xl font-bold border-b-4 border-black inline-block">
              Current Position
            </h3>
            <div className="px-2 py-1 bg-gray-300 border-2 border-black text-sm font-bold">
              COMPLETED
            </div>
          </div>

          <PositionCard data={experienceData[0]} />
        </motion.div>
      )}

      {/* Timeline (Mobile Cards) */}
      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold border-b-4 border-black inline-block mb-8">
          Career Timeline
        </h3>
      </motion.div>

      <div className="md:hidden space-y-6">
        {experienceData.map((exp, index) => (
          <MobileTimelineCard
            key={index}
            index={index}
            experience={exp}
            expanded={expandedItems.includes(index)}
            toggle={() => toggleExpanded(index)}
            variants={itemVariants}
            contentVariants={contentVariants}
          />
        ))}
      </div>

      {/* Desktop Timeline */}
      <div className="hidden md:block relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-black"></div>
        {experienceData.map((exp, index) => (
          <DesktopTimelineCard
            key={index}
            index={index}
            experience={exp}
            variants={itemVariants}
          />
        ))}
      </div>

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
    </motion.div>
  );
};

export default Experience;

/* ------------------------------
  Components Below (Helpers)
------------------------------ */

const SummaryCard = ({ icon, value, label, bg }: any) => (
  <div
    className={`border-4 border-black p-6 ${bg} hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)]`}
  >
    <div className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center bg-white mb-3">
      {icon}
    </div>
    <h3 className="text-2xl md:text-3xl font-black">{value}</h3>
    <p className="font-bold text-sm md:text-base">{label}</p>
  </div>
);

const PositionCard = ({ data }: any) => (
  <div className="border-4 border-black overflow-hidden">
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-b-4 border-black p-5 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">{data.role}</h3>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mt-2">
            <span className="font-bold text-lg">{data.company}</span>
            <div className="hidden md:block w-2 h-2 bg-black rounded-full"></div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{data.location}</span>
            </div>
          </div>
        </div>
        <div className="inline-flex items-center gap-1 bg-yellow-300 border-2 border-black px-3 py-2 text-sm">
          <Calendar className="w-3 h-3" />
          <span className="font-bold">{data.period}</span>
        </div>
      </div>
    </div>
    <div className="p-5 md:p-8 bg-white">
      <p className="text-gray-800 mb-5">{data.description}</p>
      <div className="mb-6">
        <h4 className="font-bold mb-3 text-sm uppercase tracking-wider">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {data.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="border-2 border-black px-2 py-1 text-sm bg-blue-50 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {data.accomplishments && (
        <div>
          <h4 className="font-bold mb-3 text-sm uppercase tracking-wider">
            Key Accomplishments
          </h4>
          <ul className="space-y-2">
            {data.accomplishments.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {data.url && (
        <div className="mt-6">
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-yellow-100 hover:bg-yellow-200 transition-colors font-bold text-sm"
          >
            Visit Company <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  </div>
);

const MobileTimelineCard = ({
  experience,
  index,
  expanded,
  toggle,
  variants,
  contentVariants,
}: any) => (
  <motion.div
    key={index}
    variants={variants}
    className="border-4 border-black hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition-shadow bg-white"
  >
    <div className="border-b-4 border-black p-4 bg-blue-50">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold">{experience.role}</h3>
        <div className="inline-flex items-center gap-1 bg-yellow-300 border-2 border-black px-2 py-1 text-xs">
          <Calendar className="w-3 h-3" />
          <span>{experience.period}</span>
        </div>
      </div>
      <h4 className="font-medium">{experience.company}</h4>
      <div className="flex items-center gap-1 text-sm mt-1">
        <MapPin className="w-3 h-3" />
        <span>{experience.location}</span>
      </div>
    </div>
    <div className="p-4">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between font-bold text-sm uppercase tracking-wider mb-2"
      >
        Details {expanded ? <ChevronUp /> : <ChevronDown />}
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden"
          >
            <p className="text-gray-700 mb-4">{experience.description}</p>
            <div className="mb-4">
              <h5 className="font-bold mb-2 text-xs uppercase">
                Technologies:
              </h5>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="border-2 border-black px-2 py-1 text-xs bg-blue-50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {experience.accomplishments && (
              <div>
                <h5 className="font-bold mb-2 text-xs uppercase">
                  Key Accomplishments:
                </h5>
                <ul className="space-y-2">
                  {experience.accomplishments.map(
                    (item: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);

const DesktopTimelineCard = ({ experience, index, variants }: any) => (
  <motion.div
    key={index}
    variants={variants}
    className={`relative mb-20 w-1/2 ${
      index % 2 === 0 ? "pr-12 text-right self-end ml-auto" : "pl-12"
    }`}
  >
    <div
      className={`absolute top-0 left-0 -translate-x-1/2 w-10 h-10 border-4 border-black bg-white rounded-full flex items-center justify-center z-10`}
    >
      <Briefcase className="w-4 h-4" />
    </div>
    <div>
      <div
        className={`inline-flex items-center gap-1 bg-yellow-300 border-2 border-black px-3 py-1 text-sm mb-4 ${
          index % 2 === 0 ? "float-right" : ""
        }`}
      >
        <Calendar className="w-3 h-3" />
        <span className="font-bold">{experience.period}</span>
      </div>
      <div
        className={`border-4 border-black bg-white p-6 transition hover:shadow-[${
          index % 2 === 0 ? "-5px" : "5px"
        }_5px_0px_0px_rgb(0,0,0)]`}
      >
        <h3 className="text-xl font-bold mb-1">{experience.role}</h3>
        <div className={`flex items-center gap-2 mb-4`}>
          <h4 className="text-lg">{experience.company}</h4>
          <div className="flex items-center gap-1 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{experience.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="border-2 border-black px-2 py-1 text-sm bg-blue-50"
            >
              {tech}
            </span>
          ))}
        </div>
        {experience.accomplishments && (
          <div>
            <h5 className="font-bold mb-2">Key Accomplishments:</h5>
            <ul className="list-disc list-inside space-y-2 text-sm">
              {experience.accomplishments.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {experience.url && (
          <div className="mt-4">
            <a
              href={experience.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-bold hover:underline"
            >
              Visit Company
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);
