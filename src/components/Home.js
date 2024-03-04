import React from "react";
import Hero from "./Hero";
import About from "./About";
import Achievement from "./Achievement";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <div>
        <div id="about">
          <About />
        </div>
        <div id="achievement">
          <Achievement />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;