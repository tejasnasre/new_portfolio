import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGlobe,
  FaMedium,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";

const Linktree: React.FC = () => {
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

  const links = [
    {
      name: "Personal Website",
      url: "https://tejasnasre.vercel.app",
      icon: <FaGlobe className="w-6 h-6" />,
      color: "bg-blue-100",
      description: "Check out my portfolio",
    },
    {
      name: "GitHub",
      url: "https://github.com/TejasNasre",
      icon: <FaGithub className="w-6 h-6" />,
      color: "bg-gray-100",
      description: "View my code repositories",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tejasnasre",
      icon: <FaLinkedin className="w-6 h-6" />,
      color: "bg-blue-200",
      description: "Connect with me professionally",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/tejasnasre",
      icon: <FaTwitter className="w-6 h-6" />,
      color: "bg-sky-100",
      description: "Follow my thoughts and updates",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@tejasnasre",
      icon: <FaYoutube className="w-6 h-6" />,
      color: "bg-red-100",
      description: "Watch my coding tutorials",
    },
    {
      name: "Peerlist",
      url: "https://peerlist.io/tejas_nasre",
      icon: <SiPeerlist className="w-6 h-6" />,
      color: "bg-green-100",
      description: "Professional network profile",
    },
    {
      name: "Medium",
      url: "https://medium.com/@tejasnasre120",
      icon: <FaMedium className="w-6 h-6" />,
      color: "bg-yellow-100",
      description: "Read my technical articles",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/tejas_nasre",
      icon: <FaInstagram className="w-6 h-6" />,
      color: "bg-pink-100",
      description: "Behind the scenes content",
    },
    {
      name: "Email Me",
      url: "mailto:tejasnasre120@gmail.com",
      icon: <FaEnvelope className="w-6 h-6" />,
      color: "bg-purple-100",
      description: "Send me a message",
    },
  ];

  return (
    <div className="font-codefont min-h-screen w-full bg-[#FEFFF0] p-4 pt-32 md:pt-28 md:p-8">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-8">
            {/* Profile Image with Box-in-Box Style */}
            <div className="relative mx-auto w-32 h-32 mb-6">
              <div className="absolute inset-0 border-4 border-black bg-blue-200 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 border-4 border-black bg-yellow-200 rounded-2xl transform -rotate-3"></div>
              <div className="relative w-full h-full border-4 border-black bg-white rounded-2xl overflow-hidden">
                <img
                  src="/images/profilr_img.jpg"
                  alt="Tejas Nasre"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="h-full w-full flex flex-col items-center justify-center p-4">
                          <span class="text-xl font-bold">TN</span>
                          <p class="text-center mt-1 text-xs text-gray-500">Profile photo not available</p>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Tejas Nasre
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-2"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base text-gray-500 max-w-md mx-auto"
          >
            Building modern web applications and mobile apps with cutting-edge
            technologies
          </motion.p>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {links.map((link, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -2 }}
            >
              {/* Box-in-Box Style */}
              <div className="absolute inset-0 border-4 border-black bg-black rounded-xl transform translate-x-2 translate-y-2"></div>
              <div
                className={`relative border-4 border-black ${link.color} rounded-xl transform transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1`}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 w-full"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 p-3 bg-white border-2 border-black rounded-lg">
                      {link.icon}
                    </div>
                    <div className="flex-grow text-left">
                      <h3 className="text-xl font-bold text-black mb-1">
                        {link.name}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {link.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">→</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 pt-8 border-t-4 border-black"
          initial="hidden"
          animate="visible"
        >
          <p className="text-gray-600 mb-4">
            Want to collaborate? Let's connect!
          </p>
          <div className="relative inline-block">
            <div className="absolute inset-0 border-2 border-black bg-black rounded-full transform translate-x-1 translate-y-1"></div>
            <a
              href="mailto:tejasnasre120@gmail.com"
              className="relative inline-block px-6 py-3 bg-yellow-300 border-2 border-black rounded-full font-bold text-black hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-transform"
            >
              Get in Touch ✨
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Linktree;
