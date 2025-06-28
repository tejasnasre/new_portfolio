import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import OutletCom from "./OutletCom.tsx";
import About from "./Pages/About.tsx";
import Services from "./Pages/Services.tsx";
import Projects from "./Pages/Projects.tsx";
import Experience from "./Pages/Experience.tsx";
import Events from "./Pages/Events.tsx";
import Skills from "./Pages/Skills.tsx";
import Contact from "./Pages/Contact.tsx";
import Linktree from "./Pages/Linktree.tsx";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {" "}
        <Route path="/" element={<OutletCom />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
          <Route path="linktree" element={<Linktree />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);
