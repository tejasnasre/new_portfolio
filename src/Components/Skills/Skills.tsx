import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaCode,
  FaMobile,
  FaRobot,
  FaServer,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpo,
  SiDocker,
  SiGithubactions,
  SiSupabase,
  SiVercel,
  SiResend,
  SiZod,
  SiShadcnui,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandRust } from "react-icons/tb";
import { IoSparkles } from "react-icons/io5";

const Skills: React.FC = () => {
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

  const skills = {
    frontendMastery: [
      { name: "React", icon: <FaReact />, level: "Expert" },
      { name: "Next.js", icon: <SiNextdotjs />, level: "Expert" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, level: "Expert" },
      { name: "shadcn/ui", icon: <SiShadcnui />, level: "Expert" },
    ],
    dataStack: [
      { name: "Supabase", icon: <SiSupabase />, level: "Expert" },
      { name: "TypeScript", icon: <SiTypescript />, level: "Advanced" },
      { name: "Zod", icon: <SiZod />, level: "Advanced" },
      { name: "Zustand", icon: <TbBrandRust />, level: "Advanced" },
    ],
    deployment: [
      { name: "Vercel", icon: <SiVercel />, level: "Expert" },
      { name: "Docker", icon: <SiDocker />, level: "Advanced" },
      { name: "GitHub Actions", icon: <SiGithubactions />, level: "Advanced" },
      { name: "PWA", icon: <FaCode />, level: "Advanced" },
    ],
    backend: [
      { name: "Node.js", icon: <FaNode />, level: "Advanced" },
      { name: "Express", icon: <FaServer />, level: "Advanced" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: "Advanced" },
      { name: "Resend", icon: <SiResend />, level: "Advanced" },
    ],
    other: [
      { name: "React Native", icon: <FaMobile />, level: "Proficient" },
      { name: "Expo", icon: <SiExpo />, level: "Proficient" },
      { name: "AI Tools", icon: <FaRobot />, level: "Proficient" },
      { name: "LangChain", icon: <IoSparkles />, level: "Beginner" },
    ],
  };

  const getLevelClass = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-black text-white";
      case "Advanced":
        return "bg-white text-black border-2 border-black";
      case "Proficient":
        return "bg-yellow-300 text-black border-2 border-black";
      case "Beginner":
        return "bg-blue-200 text-black border-2 border-black";
      default:
        return "bg-gray-200 text-black border-2 border-black";
    }
  };

  const getDotPattern = () => {
    return (
      <div className="absolute top-0 right-0 w-24 h-24 -mt-6 -mr-6">
        <div className="grid grid-cols-6 gap-1">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-black rounded-full"></div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      ref={ref}
      id="skills"
      className="font-codefont w-full mx-auto px-6 pb-24 md:px-16 py-28 bg-[#FEFEF1]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-20">
        <div className="inline-block relative transform rotate-1 bg-black px-6 py-3">
          <h2 className="text-5xl md:text-6xl font-black text-yellow-300">
            TECH ARSENAL
          </h2>
        </div>
        <p className="text-xl font-bold mt-10 max-w-2xl transform -rotate-1 bg-white p-3 inline-block border-4 border-black">
          My tools of choice for building exceptional digital experiences
        </p>
      </motion.div>

      {/* Skills Layout */}
      <div className="grid gap-20">
        {/* Frontend Mastery */}
        <motion.div
          variants={itemVariants}
          className="transform rotate-1 bg-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
        >
          {getDotPattern()}
          <div className="flex items-center gap-4 mb-10 -rotate-1">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-yellow-300 text-4xl shadow-lg">
              <FaReact />
            </div>
            <h3 className="text-3xl md:text-4xl font-black">
              FRONTEND MASTERY
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.frontendMastery.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ rotate: -2, scale: 1.05, y: -5 }}
                className="bg-white border-4 border-black overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="h-2 w-full bg-black"></div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-4xl">{skill.icon}</div>
                    <span
                      className={`text-sm font-black px-3 py-1 ${getLevelClass(
                        skill.level
                      )} uppercase`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <h4 className="text-xl font-black">{skill.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Data & State Management */}
        <motion.div
          variants={itemVariants}
          className="transform -rotate-1 bg-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
        >
          {getDotPattern()}
          <div className="flex items-center gap-4 mb-10 rotate-1">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-yellow-300 text-4xl shadow-lg">
              <SiSupabase />
            </div>
            <h3 className="text-3xl md:text-4xl font-black">
              DATA & STATE MANAGEMENT
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.dataStack.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ rotate: 2, scale: 1.05, y: -5 }}
                className="bg-white border-4 border-black overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="h-2 w-full bg-black"></div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-4xl">{skill.icon}</div>
                    <span
                      className={`text-sm font-black px-3 py-1 ${getLevelClass(
                        skill.level
                      )} uppercase`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <h4 className="text-xl font-black">{skill.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deployment & DevOps */}
        <motion.div
          variants={itemVariants}
          className="transform rotate-1 bg-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
        >
          {getDotPattern()}
          <div className="flex items-center gap-4 mb-10 -rotate-1">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-yellow-300 text-4xl shadow-lg">
              <SiVercel />
            </div>
            <h3 className="text-3xl md:text-4xl font-black">
              DEPLOYMENT & DEVOPS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.deployment.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ rotate: -2, scale: 1.05, y: -5 }}
                className="bg-white border-4 border-black overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="h-2 w-full bg-black"></div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-4xl">{skill.icon}</div>
                    <span
                      className={`text-sm font-black px-3 py-1 ${getLevelClass(
                        skill.level
                      )} uppercase`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <h4 className="text-xl font-black">{skill.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backend & APIs */}
        <motion.div
          variants={itemVariants}
          className="transform -rotate-1 bg-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
        >
          {getDotPattern()}
          <div className="flex items-center gap-4 mb-10 rotate-1">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-yellow-300 text-4xl shadow-lg">
              <FaDatabase />
            </div>
            <h3 className="text-3xl md:text-4xl font-black">BACKEND & APIs</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.backend.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ rotate: 2, scale: 1.05, y: -5 }}
                className="bg-white border-4 border-black overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="h-2 w-full bg-black"></div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-4xl">{skill.icon}</div>
                    <span
                      className={`text-sm font-black px-3 py-1 ${getLevelClass(
                        skill.level
                      )} uppercase`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <h4 className="text-xl font-black">{skill.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expanding Horizons */}
        <motion.div
          variants={itemVariants}
          className="transform rotate-1 bg-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
        >
          {getDotPattern()}
          <div className="flex items-center gap-4 mb-10 -rotate-1">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-yellow-300 text-4xl shadow-lg">
              <FaMobile />
            </div>
            <h3 className="text-3xl md:text-4xl font-black">
              EXPANDING HORIZONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.other.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ rotate: -2, scale: 1.05, y: -5 }}
                className="bg-white border-4 border-black overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="h-2 w-full bg-black"></div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-4xl">{skill.icon}</div>
                    <span
                      className={`text-sm font-black px-3 py-1 ${getLevelClass(
                        skill.level
                      )} uppercase`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <h4 className="text-xl font-black">{skill.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Also Familiar With */}
        <motion.div variants={itemVariants}>
          <div className="transform -rotate-1 bg-black text-yellow-300 p-8 mb-10 inline-flex items-center gap-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <div className="text-4xl">
              <FaCode />
            </div>
            <h3 className="text-3xl font-black">ALSO IN MY TOOLBOX</h3>
          </div>

          <div className="bg-white border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
            {getDotPattern()}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {[
                "Qdrant VDB",
                "Recharts",
                "Vercel AI SDK",
                "GitHub Copilot",
                "Bolt.new",
                "Lovable.dev",
                "Socket.IO",
                "Framer Motion",
                "Shadcn",
                "Drizzle ORM",
                "ValKey",
                "Cursor IDE",
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="border-4 border-black p-4 text-center bg-yellow-300 font-black text-lg relative"
                  style={{
                    transform:
                      index % 3 === 0
                        ? "rotate(2deg)"
                        : index % 3 === 1
                        ? "rotate(-1deg)"
                        : "rotate(1deg)",
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
