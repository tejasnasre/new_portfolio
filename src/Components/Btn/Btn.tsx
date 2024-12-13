import React from "react";
import { Link } from "react-router";

interface BtnProps {
  text: string;
  onClick?: () => void;
  to?: string;
}

const Btn: React.FC<BtnProps> = ({ text, onClick, to }) => {
  return (
    <button
      onClick={onClick}
      className="border-4 border-black bg-[#BAE6FF] rounded-full p-2 text-sm md:text-xl font-bold transition ease-in-out duration-400 hover:scale-100 hover:border-black hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)]"
    >
      {to ? <Link to={to}>{text}</Link> : <p>{text}</p>}
    </button>
  );
};

export default Btn;
