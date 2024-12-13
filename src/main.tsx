import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import OutletCom from "./OutletCom.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OutletCom />}>
          <Route path="" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
