import React from "react";
import { FaGlobe, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import { SiPeerlist } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FEFFF0] font-codefont py-4 px-6 flex flex-col items-center justify-between">
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between w-full">
        <div className="font-bold text-2xl text-black">Tejas Nasre</div>
        <nav>
          <ul className="bg-[#FEFFF0] flex items-center space-x-6">
            <li>
              <p className="text-black hover:text-gray-800">Portfolio 2025</p>
            </li>
            <li>
              <Link
                to="https://tejasnasre.tech/"
                className="text-black hover:text-gray-800"
              >
                <FaGlobe />
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/TejasNasre"
                className="text-black hover:text-gray-800"
              >
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/tejasnasre"
                className="text-black hover:text-gray-800"
              >
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link
                to="https://twitter.com/tejasnasre"
                className="text-black hover:text-gray-800"
              >
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                to="https://peerlist.io/tejas_nasre"
                className="text-black hover:text-gray-800"
              >
                <SiPeerlist />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-4 text-black flex flex-col gap-1 md:gap-4 md:flex-row justify-center items-center">
        <p>tejasnasre120@gmail.com</p>
        <p>&copy; 2025 Tejas Nasre</p>
      </div>
    </footer>
  );
};

export default Footer;
