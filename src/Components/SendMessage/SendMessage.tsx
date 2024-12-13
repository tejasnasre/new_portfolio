import React from "react";
import { motion } from "framer-motion";
import Btn from "../Btn/Btn";

const SendMessage: React.FC = () => {
  const sectionVariants = {
    offscreen: {
      opacity: 0,
      y: 100,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const shineVariants = {
    hover: {
      scale: 1.25,
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="font-codefont bg-[#FEFFF0] mx-auto"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="wfull mx-auto px-10 md:px-36 py-36">
        <motion.div
          variants={sectionVariants}
          className="relative border-4 border-black p-8 transition ease-in-out duration-400 hover:scale-100 hover:border-black hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] bg-[#FEFFF0]"
        >
          <div className="flex flex-col items-center text-center space-y-4 pt-4 ">
            <motion.h2
              variants={sectionVariants}
              className="text-3xl md:text-4xl font-black"
            >
              Let's start designing your project
            </motion.h2>

            <motion.p
              variants={sectionVariants}
              className="text-gray-600 max-w-md"
            >
              Want to see how to transform your brand into a unique style, sent
              us a message
            </motion.p>

            <motion.div
              variants={sectionVariants}
              className="relative mt-4 group"
            >
              <Btn to="mailto:tejasnasre120@gmail.com" text="Send me message" />
              {/* Decorative shine element */}
              <motion.div
                variants={shineVariants}
                whileHover="hover"
                className="absolute -right-2 -top-1 text-xl transition-transform"
              >
                ✨
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SendMessage;
