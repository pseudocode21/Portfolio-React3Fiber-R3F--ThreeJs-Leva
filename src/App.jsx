import React from "react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import Education from "./section/Education";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education/>
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
