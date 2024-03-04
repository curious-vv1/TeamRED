import React from "react";
import Hero from "./Hero";
import About from "./About";
import Achievement from "./Achievement";
import Footer from "./Footer";
import Team from "./Team";
import Projects from "./Projects";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <div>
        <div id="about">
          <About />
        </div>
        <div>
          <Projects />
        </div>
        <div id="achievement">
          <Achievement />
        </div>
        <div>
          <Team />
        </div>
        <div>
          <Gallery />
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;