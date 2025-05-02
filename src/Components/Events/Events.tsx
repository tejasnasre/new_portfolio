import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Award,
  MapPin,
  Users,
  ChevronRight,
  ChevronLeft,
  Image as ImageIcon,
  X,
} from "lucide-react";
import { eventsData } from "./eventsData";

const Events: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<null | number>(null);
  const [selectedImage, setSelectedImage] = useState<null | string>(null);

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
    setActiveIndex((prevIndex) =>
      prevIndex === eventsData.organized.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? eventsData.organized.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      ref={ref}
      id="events"
      className="font-codefont bg-[#FEFFF0] w-full mx-auto p-10 md:px-36 py-28"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-12">
        <h2 className="text-4xl font-black mb-2 inline-block border-b-4 border-black">
          Event Organization
        </h2>
        <span className="ml-2 text-4xl">🎪</span>
        <p className="text-xl font-bold mt-2">
          Creating impactful tech experiences and fostering community growth.
        </p>
      </motion.div>

      {/* Event Summary Stats */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        {/* Events Organized */}
        <div className="border-4 border-black p-6 bg-gradient-to-br from-red-100 to-red-50 hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition-shadow">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center bg-red-200 mb-3">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-black">
              {eventsData.organized.length}
            </h3>
            <p className="font-bold mt-1">Events Organized</p>
          </div>
        </div>

        {/* Events Attended */}
        <div className="border-4 border-black p-6 bg-gradient-to-br from-blue-100 to-blue-50 hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition-shadow">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center bg-blue-200 mb-3">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-black">50+</h3>
            <p className="font-bold mt-1">Events Attended</p>
          </div>
        </div>

        {/* Total Participants */}
        <div className="border-4 border-black p-6 bg-gradient-to-br from-green-100 to-green-50 hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition-shadow">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center bg-green-200 mb-3">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-black">600+</h3>
            <p className="font-bold mt-1">Total Participants</p>
          </div>
        </div>
      </motion.div>

      {/* Featured Event */}
      <motion.div variants={itemVariants} className="mb-16">
        <h3 className="text-2xl font-bold border-b-4 border-black inline-block mb-8">
          Featured Event
        </h3>

        <div className="relative border-4 border-black overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-20 h-20 border-8 border-black rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 border-8 border-black"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 border-8 border-black transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          </div>

          <div className="grid md:grid-cols-2 relative z-10">
            {/* Image Side */}
            <div className="h-64 md:h-auto bg-yellow-100 border-b-4 md:border-b-0 md:border-r-4 border-black relative overflow-hidden">
              <img
                src={eventsData.organized[activeIndex].imageSrc}
                alt={eventsData.organized[activeIndex].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 bg-black text-white px-4 py-2 font-bold text-sm">
                {eventsData.organized[activeIndex].year}
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 bg-[#FEFFF0]">
              <h3 className="text-3xl font-bold mb-2">
                {eventsData.organized[activeIndex].name}
              </h3>
              <div className="flex items-center text-sm mb-2 gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-bold">
                  {eventsData.organized[activeIndex].role}
                </span>
              </div>
              <div className="flex items-center text-sm mb-4 gap-2">
                <MapPin className="w-4 h-4" />
                <span>{eventsData.organized[activeIndex].location}</span>
              </div>

              <p className="mb-6">
                {eventsData.organized[activeIndex].description}
              </p>

              <h4 className="font-bold mb-2 text-sm uppercase tracking-wider">
                Key Achievements:
              </h4>
              <ul className="space-y-2 mb-8">
                {eventsData.organized[activeIndex].achievements.map(
                  (achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  )
                )}
              </ul>

              {/* Gallery Preview */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <ImageIcon className="w-4 h-4" />
                  <h4 className="font-bold text-sm uppercase tracking-wider">
                    Event Gallery
                  </h4>
                </div>
                <div className="flex gap-2">
                  {eventsData.organized[activeIndex].gallery.map(
                    (image, idx) => (
                      <div
                        key={idx}
                        className="w-16 h-16 border-2 border-black cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${
                            eventsData.organized[activeIndex].name
                          } gallery ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-bold">
                    {activeIndex + 1} / {eventsData.organized.length}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* All Organized Events */}
      <motion.div variants={itemVariants} className="mb-16">
        <h3 className="text-2xl font-bold border-b-4 border-black inline-block mb-8">
          Event Portfolio
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.organized.map((event, index) => (
            <motion.div
              key={`organized-${index}`}
              variants={itemVariants}
              className="border-4 border-black bg-white hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden border-b-4 border-black bg-gray-100">
                <img
                  src={event.imageSrc}
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold">{event.name}</h4>
                  <div className="bg-green-300 px-3 py-1 text-sm border-2 border-black font-bold">
                    {event.year}
                  </div>
                </div>
                <div className="flex items-center text-sm mb-2 gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-bold">{event.role}</span>
                </div>
                <div className="flex items-center text-sm mb-3 gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <p className="text-sm mb-4 line-clamp-3">{event.description}</p>
                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedEvent(index)}
                    className="text-sm font-bold flex items-center gap-1 hover:underline"
                  >
                    View Details <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Event Organization Process */}
      <motion.div variants={itemVariants} className="mb-16">
        <h3 className="text-2xl font-bold border-b-4 border-black inline-block mb-8">
          My Event Organization Process
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: 1,
              title: "Concept Development",
              description:
                "I start by identifying gaps in the tech community and developing event concepts that address specific needs and interests.",
              bgColor: "bg-blue-50",
              iconBg: "bg-blue-200",
            },
            {
              step: 2,
              title: "Team Building & Planning",
              description:
                "Assembling the right team and creating detailed plans including budget, venue, speakers, and promotion strategy.",
              bgColor: "bg-green-50",
              iconBg: "bg-green-200",
            },
            {
              step: 3,
              title: "Execution & Management",
              description:
                "Overseeing all aspects of the event to ensure seamless execution, from technical setup to participant experience.",
              bgColor: "bg-yellow-50",
              iconBg: "bg-yellow-200",
            },
            {
              step: 4,
              title: "Follow-up & Analysis",
              description:
                "Collecting feedback, measuring impact, and identifying improvements for future events.",
              bgColor: "bg-red-50",
              iconBg: "bg-red-200",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`border-4 border-black p-6 ${item.bgColor} hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition-shadow`}
            >
              <div
                className={`w-12 h-12 rounded-full border-4 border-black flex items-center justify-center ${item.iconBg} mb-4 font-black text-xl`}
              >
                {item.step}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={itemVariants}
        className="border-4 border-black p-8 bg-gradient-to-r from-blue-100 to-purple-100 flex flex-col md:flex-row justify-between items-center transition-shadow hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)]"
      >
        <div>
          <h3 className="text-2xl font-bold mb-2">
            Want to collaborate on an event?
          </h3>
          <p className="text-lg">
            Let's combine our expertise to create memorable tech experiences.
          </p>
        </div>
        <a
          href="mailto:tejasnasre120@gmail.com"
          className="mt-6 md:mt-0 border-4 border-black bg-white px-8 py-3 font-bold text-lg transition-shadow hover:shadow-[3px_3px_0px_0px_rgb(0,0,0)] hover:bg-yellow-100"
        >
          Let's Talk
        </a>
      </motion.div>

      {/* Event Detail Modal */}
      {selectedEvent !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FEFFF0] border-4 border-black max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="border-b-4 border-black p-4 flex justify-between items-center bg-blue-50">
              <h3 className="text-2xl font-bold">
                {eventsData.organized[selectedEvent].name}
              </h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="w-10 h-10 border-4 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {/* Event Image */}
              <div className="border-4 border-black h-72 mb-6">
                <img
                  src={eventsData.organized[selectedEvent].imageSrc}
                  alt={eventsData.organized[selectedEvent].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="border-4 border-black p-4 bg-yellow-50">
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-2">
                    Role
                  </h4>
                  <p>{eventsData.organized[selectedEvent].role}</p>
                </div>
                <div className="border-4 border-black p-4 bg-green-50">
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-2">
                    Year
                  </h4>
                  <p>{eventsData.organized[selectedEvent].year}</p>
                </div>
                <div className="border-4 border-black p-4 bg-blue-50">
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-2">
                    Location
                  </h4>
                  <p>{eventsData.organized[selectedEvent].location}</p>
                </div>
              </div>

              {/* Event Description */}
              <div className="border-4 border-black p-6 mb-6 bg-white">
                <h4 className="font-bold text-lg mb-3">About the Event</h4>
                <p>{eventsData.organized[selectedEvent].description}</p>
              </div>

              {/* Achievements */}
              <div className="border-4 border-black p-6 mb-6 bg-green-50">
                <h4 className="font-bold text-lg mb-3">Key Achievements</h4>
                <ul className="space-y-3">
                  {eventsData.organized[selectedEvent].achievements.map(
                    (achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1 font-bold">✓</span>
                        <span>{achievement}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Gallery */}
              <div className="border-4 border-black p-6 bg-blue-50">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  Event Gallery
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {eventsData.organized[selectedEvent].gallery.map(
                    (image, idx) => (
                      <div
                        key={idx}
                        className="border-4 border-black cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${
                            eventsData.organized[selectedEvent].name
                          } image ${idx + 1}`}
                          className="w-full h-40 object-cover"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 border-4 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged event photo"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </motion.div>
  );
};

export default Events;
