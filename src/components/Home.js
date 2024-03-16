import React from "react";
import Hero from "./Hero";
import About from "./About";
import Achievement from "./Achievement";
import Footer from "./Footer";
import Team from "./Team";
import Projects from "./Projects";
import MediaQuery from "react-responsive";
import Gallery from "./Gallery";
import Mprojects from "./Mprojects";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <MediaQuery maxWidth={767}>
            <Mprojects />
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <Projects />
          </MediaQuery>
        </div>
        <div id="achievement">
          <Achievement />
        </div>
        <div id="gallery" className="hidden lg:block">
          <Gallery />
        </div>
        <div id="team">
          <Team />
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
