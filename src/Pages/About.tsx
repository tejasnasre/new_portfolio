import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { FaDownload } from "react-icons/fa6";

const About: React.FC = () => {
  return (
    <>
      <div className="font-codefont min-h-screen w-full bg-[#FEFFF0] p-4 pt-36 md:pt-32 md:p-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full">
                <Code2 className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Full Stack Developer
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                I code top notch{" "}
                <span className="relative inline-block">
                  webapps
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 -z-10"></div>
                </span>
              </h1>

              <p className="text-lg text-gray-600">
                Building modern, responsive, and user-friendly web applications
                with cutting-edge technologies.
              </p>

              <p className="text-lg text-gray-600 max-w-lg">
                Hello! I'm Tejas, a passionate Full Stack Developer specializing
                in React, Next.js, and modern JavaScript frameworks. With a
                strong foundation in both frontend and backend technologies, I
                create seamless digital experiences that combine beautiful
                design with powerful functionality.
              </p>

              <p className="text-lg text-gray-600 max-w-lg">
                My journey in web development started in 2023, and since then
                I've worked with startups, established companies, and individual
                clients to bring their vision to life. I'm constantly learning
                and experimenting with new technologies to stay at the forefront
                of web development.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 py-3 bg-blue-100 text-black border-2 border-black rounded-full font-medium transition-shadow hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <a href="/projects">see projects</a>

                  <div className="absolute top-0 right-0 -mt-2 -mr-2 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black"></div>
                </motion.button>

                <motion.a
                  href="https://drive.google.com/file/d/1Wz-lxVa6MIsStFEa17sX5HhXbrSw_8ko/view?usp=sharing"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-black hover:text-blue-600 font-medium"
                >
                  Resume <FaDownload className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Border Frame */}
                <div className="absolute inset-0 border-2 border-black bg-gradient-to-br from-blue-100 to-white rounded-3xl transform rotate-2"></div>
                <div className="absolute inset-0 border-2 border-black bg-gradient-to-br from-blue-100 to-white rounded-3xl transform -rotate-2"></div>

                {/* Main Image Container */}
                <div className="relative h-full border-2 border-black bg-[#FEFFF0] rounded-3xl overflow-hidden p-8">
                  <img
                    src="https://res.cloudinary.com/dbjk3jn4w/image/upload/v1746094221/IMG20250427165434_1_q8psuv.jpg"
                    alt="Developer Portrait"
                    className="object-cover w-full h-full"
                  />

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-300 rounded-full border-2 border-black flex items-center justify-center">
                    <span className="text-xl">:)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
