"use client";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Contact from "./Contact";
import { ParticlesBG } from "./ParticlesBackgronud";

const Body = () => {
  return (
    <div>
      <Navbar />
      <ParticlesBG />
      <Header />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
};

export default Body;
