import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Award } from "lucide-react";
import { achievementsData } from "./achievementsData";

const Achievements: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedAchievement, setExpandedAchievement] = useState<number | null>(
    null
  );

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

  const nextSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex + 1) % achievementsData.featured.length
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? achievementsData.featured.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full"
    >
      {/* Featured Achievement */}
      <motion.div variants={itemVariants} className="mb-16">
        <div className="border-4 border-black overflow-hidden">
          {/* Featured Achievement Slider */}
          <div className="relative bg-gradient-to-r from-yellow-100 to-yellow-50 border-b-4 border-black p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Featured Achievement</h3>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 border-2 border-black bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-8 h-8 border-2 border-black bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            {/* Image Side */}
            <div className="h-64 md:h-auto bg-black/5 relative overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-black">
              <img
                src={achievementsData.featured[activeIndex].image}
                alt={achievementsData.featured[activeIndex].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content Side */}
            <div className="p-8 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-yellow-600" />
                <h3 className="text-2xl font-bold">
                  {achievementsData.featured[activeIndex].title}
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                {achievementsData.featured[activeIndex].description}
              </p>
              <div className="space-y-3">
                {achievementsData.featured[activeIndex].highlights.map(
                  (highlight, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-5 h-5 mt-0.5 rounded-full border-2 border-black flex items-center justify-center bg-yellow-100 flex-shrink-0">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                      </div>
                      <p>{highlight}</p>
                    </div>
                  )
                )}
              </div>

              {achievementsData.featured[activeIndex].link && (
                <div className="mt-6">
                  <a
                    href={achievementsData.featured[activeIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black bg-yellow-100 hover:bg-yellow-200 transition-colors"
                  >
                    View Achievement <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Achievement Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {achievementsData.all.map((achievement, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="border-4 border-black bg-white hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="h-48 overflow-hidden border-b-4 border-black bg-gray-100 relative">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {achievement.year && (
                <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 text-sm font-bold">
                  {achievement.year}
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {achievement.description}
              </p>

              <div className="flex items-center justify-between">
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold hover:underline"
                  >
                    View details <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                )}

                <button
                  onClick={() =>
                    setExpandedAchievement(
                      expandedAchievement === index ? null : index
                    )
                  }
                  className="inline-flex items-center text-sm font-bold hover:underline"
                >
                  {expandedAchievement === index ? "Show less" : "Learn more"}
                </button>
              </div>

              {expandedAchievement === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-gray-200 overflow-hidden"
                >
                  {achievement.highlights && (
                    <div className="space-y-2">
                      {achievement.highlights.map((highlight, hIndex) => (
                        <div
                          key={hIndex}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Achievements;
