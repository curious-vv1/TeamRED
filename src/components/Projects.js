import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ChevronDoubleLeftIcon,ChevronDoubleRightIcon} from "@heroicons/react/24/outline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arm0 from "../assets/arm0.jpeg";
import Lfr0 from "../assets/lfr0.jpg";
import Drone0 from "../assets/drone0.jpg";
import Manipulator0 from "../assets/manipulator0.jpg";
import Rcplane0 from "../assets/rcplane0.jpg";




const works = [
  {
    name: "Robotic Arm",
    description:
      "An intelligent robotic arm with advanced workspace analysis techniques with integrated AI techniques for path planning and object pick place mechanism.",
    status: "ongoing",
    image:
      Arm0,
  },
  {
    name: "Autonomous Drone",
    description:
      "An autonomous flying drone having the capabilities of accepting missions & can complete the Mission without human intervention, enough to avoid obstacles, and perform operations based on image.",
    status: "ongoing",
    image:
      Drone0,
  },
  {
    name: "Maze Solver Robot",
    description:
      "An autonomous car with maze solving capabilities traversing path avoiding dynamic obstacles and creating a successful shortest path between two points in a any traversed map",
    status: "Completed",
    image:
      Lfr0,
  },
  {
    name: "Cylinderical Manipulator",
    description:
      "A robotic manipulator with a revolute joint allowing access to cylindrical C-space equipped with advanced drilling end effector for soil analysis.",
    status: "Completed",
    image:
      Manipulator0,
  },
  {
    name: "RC Plane",
    description:
      "A remote controlled plane which has high maneuverability to do aerobatics",
    status: "Completed",
    image:
      Rcplane0,
  },
  // {
  //   name: "Robotic Arm",
  //   description:
  //     "cvkjbdfjbh jdfjgvbjvkdfjvdf jdfvjdjb jkbsdjbsdjkawhiejvnjdsfjve jsvdfhve",
  //   status: "ongoing",
  //   image:
  //     "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png",
  // },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "red",paddingLeft:"0.5rem" }} 
      onClick={onClick}
    >
      <ChevronDoubleRightIcon className="h-6 w-6 scale-150" /> 
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "red",paddingRight:"0.5rem" }} 
      onClick={onClick}
    >
      <ChevronDoubleLeftIcon className="h-6 w-6 scale-125"/> 
    </div>
  );
}

const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-12 lg:max-w-none lg:py-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            Projects
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-1 lg:gap-x-16 lg:space-y-0">
            <Slider {...settings}>
              {works.map((work) => (
                <div key={work.name} className="flex">
                  <div className="relative isolate overflow-hidden bg-white flex-1 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                      aria-hidden="true"
                    >
                      <circle
                        cx={512}
                        cy={512}
                        r={512}
                        fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                        fillOpacity="0.7"
                      />
                      <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                          <stop stopColor="#FF8080" />
                          <stop offset={1} stopColor="#EE4266" />
                        </radialGradient>
                      </defs>
                    </svg>
                    <div className="mx-6 max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                      <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                        {work.name}
                      </h2>
                      <p className="mt-6 text-lg leading-8 text-gray-800">
                        {work.description}
                      </p>
                      <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <a
                          href="#"
                          className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          {work.status}
                        </a>
                        <Link
                          to="/projectspage"
                          className="text-sm font-semibold leading-6 text-black"
                        >
                          Learn more <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                    <div className="relative mt-16 h-60 lg:mt-8">
                      <img
                        className="absolute left-0 top-0 lg:w-[36rem] md:w-[32rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                        src={work.image}
                        alt="App screenshot"
                        width={1080}
                        height={1080}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;