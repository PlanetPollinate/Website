import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Mission from "./Pages/Mission";
import About from "./Pages/About";
import GetInvolved from "./Pages/GetInvolved";
import "./CSS/App.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="/About" element={<About />} />
          <Route path="/Get%20Involved" element={<GetInvolved />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
