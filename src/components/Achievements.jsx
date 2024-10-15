import React, { useEffect } from "react";
import { Swiper } from "swiper/bundle";
import { Link } from "react-scroll";
import { AchieveRoorkee,AchieveGandhi,AchieveFlip } from "../assets/assets";

import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Achievements = [
  { label: "Roorkee", href: "projects", image: AchieveRoorkee, text: "PyC is the perfect community for aspiring and seasoned coders alike. Whether you're a beginner looking to learn the basics of programming or an experienced developer eager to hone your skills, PyC offers a supportive environment where members can collaborate, learn, and grow together. Join us for coding challenges, hackathons, and workshops that cover a wide range of programming languages and technologies.", textColor: "#cb84fe"},
  { label: "Gandhinagar", href: "projects", image: AchieveGandhi, text: "REC brings together enthusiasts and innovators passionate about robotics. Our Achievement provides hands-on experience in designing, building, and programming robots. From beginner projects to advanced autonomous systems, REC is a hub for creativity and technical excellence. Participate in competitions, workshops, and collaborative projects that push the boundaries of what's possible with robotics.", textColor: "#000000"},
  { label: "Flipkart", href: "projects", image: AchieveFlip, text: "DevC community is dedicated to nurturing the next generation of software developers and engineers. We focus on all aspects of software development, from front-end design to back-end architecture, and everything in between. Our activities include coding bootcamps, app development sprints, and seminars with industry professionals. DevC is the place to turn your development ideas into reality.", textColor: "#e2d0c7"}
];

const AchievementsSwiper = () => {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      mousewheel: {
        enabled: true,
        forceToAxis: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      direction: "horizontal",
      coverflowEffect: {
        rotate: -25,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      on: {
        init: function () {
          // Apply blur to all slides initially
          const slides = document.querySelectorAll(".swiper-slide");
          slides.forEach((slide) => {
            slide.style.filter = "blur(5px)";
          });

          // Remove blur from the active slide
          const activeSlide = document.querySelector(".swiper-slide-active");
          activeSlide.style.filter = "blur(0)";
        },
        slideChangeTransitionStart: function () {
          // Remove blur from all slides
          const slides = document.querySelectorAll(".swiper-slide");
          slides.forEach((slide) => {
            slide.style.filter = "blur(0)";
          });

          // Apply blur to inactive slides
          const activeIndex = swiper.activeIndex;
          slides.forEach((slide, index) => {
            if (index !== activeIndex) {
              slide.style.filter = "blur(5px)";
            }
          });
        },
      },
    });

    return () => swiper.destroy();
  }, []);

  return (
    <section className="collection py-[16vw] mx-[8vw]" id="achievements">
      <div className="text-4xl sm:text-5xl font-serif text-white font-bold text-center mb-12">
        --- Our Achievements ---{" "}
      </div>
      <div className="flex swiper mySwiper">
        <div className="swiper-wrapper flex">
          {Achievements.map((Achievement, index) => (
            <div
              key={index}
              className="relative content swiper-slide h-64 w-64 bg-gray-700 border-2 border-white hover:border-blue-300 border-opacity-10 rounded-lg overflow-hidden shadow-lg group"
            >
              <Link to={Achievement.href} smooth>
                <img
                  src={Achievement.image}
                  alt="Achievement"
                  className="w-full h-full object-cover rounded-lg transition-filter duration-300 group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="p-4 text-white text-s md:text-s font-semibold text-center"  style={{ color: Achievement.textColor }}>
                    {Achievement.text}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSwiper;
