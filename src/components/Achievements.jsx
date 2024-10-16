import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Keyboard } from "swiper/modules";
import { AchieveRoorkee, AchieveGandhi, AchieveFlip } from "../assets/assets";

import "swiper/css";
import "swiper/css/effect-coverflow";

const Achievements = [
  {
    label: "Roorkee",
    href: "projects",
    image: AchieveRoorkee,
    text: "PyC is the perfect community for aspiring and seasoned coders alike. Whether you're a beginner looking to learn the basics of programming or an experienced developer eager to hone your skills, PyC offers a supportive environment where members can collaborate, learn, and grow together. Join us for coding challenges, hackathons, and workshops that cover a wide range of programming languages and technologies.",
    textColor: "#cb84fe",
  },
  {
    label: "Gandhinagar",
    href: "projects",
    image: AchieveGandhi,
    text: "REC brings together enthusiasts and innovators passionate about robotics. Our Achievement provides hands-on experience in designing, building, and programming robots. From beginner projects to advanced autonomous systems, REC is a hub for creativity and technical excellence. Participate in competitions, workshops, and collaborative projects that push the boundaries of what's possible with robotics.",
    textColor: "#000000",
  },
  {
    label: "Flipkart",
    href: "projects",
    image: AchieveFlip,
    text: "DevC community is dedicated to nurturing the next generation of software developers and engineers. We focus on all aspects of software development, from front-end design to back-end architecture, and everything in between. Our activities include coding bootcamps, app development sprints, and seminars with industry professionals. DevC is the place to turn your development ideas into reality.",
    textColor: "#e2d0c7",
  },
];



const AchievementsSwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleSlideChange = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        const swiper = swiperRef.current.swiper;
        const slides = swiper.slides;
        slides.forEach((slide, index) => {
          slide.style.filter =
            index === swiper.activeIndex ? "blur(0)" : "blur(5px)";
        });
      }
    };

    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on("slideChange", handleSlideChange);
      handleSlideChange(); // Initial blur effect
    }

    return () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.off("slideChange", handleSlideChange);
      }
    };
  }, []);

  return (
    <section className="achievements py-16 px-8" id="achievements">
      <h2 className="text-4xl sm:text-5xl font-serif text-white font-bold text-center mb-12">
        --- Our Achievements ---
      </h2>
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        mousewheel={{ forceToAxis: true }}
        keyboard={{ enabled: true, onlyInViewport: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Mousewheel, Keyboard]}
        className="mySwiper m-16"
      >
        {Achievements.map((achievement, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide-spinning"
            style={{ width: "80%", maxWidth: "600px" }}
          >
            <div className="flex flex-col lg:flex-row bg-gray-700 rounded-lg overflow-hidden shadow-lg slide-content">
              <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
                <img
                  src={achievement.image}
                  alt={achievement.label}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: achievement.textColor }}
                >
                  {achievement.label}
                </h3>
                <p className="text-white text-sm md:text-base">
                  {achievement.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        .swiper-slide-spinning {
          transition: transform 0.6s ease;
        }
        .swiper-slide-prev,
        .swiper-slide-next {
          transform: perspective(1000px) rotateY(10deg) scale(0.9);
          z-index: 1;
        }
        .swiper-slide-active {
          transform: perspective(1000px) rotateY(0deg) scale(1);
          z-index: 2;
        }
        .slide-content {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: box-shadow 0.3s ease-in-out;
        }
        .swiper-slide-active .slide-content:hover {
          box-shadow: 0 6px 20px rgba(255, 0, 0, 0.9);
        }
      `}</style>
    </section>
  );
};

export default AchievementsSwiper;