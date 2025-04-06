import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Services from "./components/Services.jsx";
import Top from "./components/Top.jsx";
import About from "./components/About.jsx";
import Contato from "./components/Contato.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Top />
    <Hero />
    <Services />
    <About />
    <Contato />
    <Footer />
  </StrictMode>
);
