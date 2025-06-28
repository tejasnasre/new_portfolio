import { useState } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    initial: { opacity: 0, height: 0 },
    animate: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
  };
  // Navigation items with path-based routing instead of hash-based
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
    { name: "Links", path: "/linktree" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.div
      className="bg-transparent w-full p-4 flex flex-col fixed z-50"
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Main Header */}
      <motion.div className="bg-[#FEFFF0] w-full border-2 border-black rounded-full p-2 transition ease-in-out duration-300 hover:scale-100 hover:border-black hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)]">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div
            className="flex items-center gap-2 px-4 py-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="rotate-45">
              <div className="w-3 h-3 bg-black" />
            </div>
            <span className="font-codefont font-semibold">
              <Link to="/">Tejas Nasre</Link>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex md:flex-row font-codefont font-semibold overflow-x-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div key={index} className="px-1">
                <Link
                  to={item.path}
                  className={`flex flex-col justify-center items-center ${
                    isActive(item.path)
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  } transition-colors rounded-full px-4 py-1 whitespace-nowrap`}
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden px-4 py-2"
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 border-2 border-black bg-[#FEFFF0] z-10 mx-4 rounded-xl"
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex flex-col divide-y-2 divide-black">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`px-4 py-2 ${
                    isActive(item.path)
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  } transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.span
                    whileHover={{ backgroundColor: "black", color: "white" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
