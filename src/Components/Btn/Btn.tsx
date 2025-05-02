import React from "react";
import { Link } from "react-router-dom";

interface BtnProps {
  text: string;
  onClick?: () => void;
  to?: string;
}

const Btn: React.FC<BtnProps> = ({ text, onClick, to }) => {
  // Check if the URL is external (has http or mailto)
  const isExternalLink =
    to && (to.startsWith("http") || to.startsWith("mailto"));

  return (
    <button
      onClick={onClick}
      className="border-4 border-black bg-[#BAE6FF] rounded-full p-2 text-sm md:text-xl font-bold transition ease-in-out duration-400 hover:scale-100 hover:border-black hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)]"
    >
      {to ? (
        isExternalLink ? (
          <a href={to} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        ) : (
          <Link to={to}>{text}</Link>
        )
      ) : (
        <p>{text}</p>
      )}
    </button>
  );
};

export default Btn;
