import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BackgroundMusic from "./Components/Audio/BackgroundMusic";

const OutletCom: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <BackgroundMusic audioSrc="/assets/audio/song.mp3" autoplay={true} />
    </>
  );
};

export default OutletCom;
