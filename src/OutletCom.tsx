import React from "react";
import { Outlet } from "react-router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

const OutletCom: React.FC = () => {
  const containerRef = useRef(null);
  return (
    <>
      <LocomotiveScrollProvider
        options={{ smooth: true }}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Header />
          <Outlet />
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default OutletCom;
