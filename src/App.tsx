import React from "react";
import Home from "./Pages/Home";
import Project from "./Components/Project/Project.tsx";
import SendMessage from "./Components/SendMessage/SendMessage.tsx";
import ServicesGrid from "./Components/ServiceGrid/ServiceGrid.tsx";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <ServicesGrid />
      <Project />
      <SendMessage />
    </>
  );
};

export default App;
