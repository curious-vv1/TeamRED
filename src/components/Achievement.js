import React from "react";
import Achieve0 from "../assets/achieve0.jpeg";
import Achieve1 from "../assets/achieve1.jpeg";
import Achieve2 from "../assets/achieve2.jpeg";

const callouts = [
  {
    name: " Chanakya UG Fellowship",
    description: "i-Hub DivyaSampark, IIT Roorkee",
    imageSrc:
      Achieve0,
    imageAlt: "IIT Roorkie",
    href: "#",
  },
  {
    name: "2nd among 40+ Teams",
    description: "RoboQuest, Amalthea'22 IIT Gandhinagar",
    imageSrc:
      Achieve1,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Top-35 among 4000+ Teams",
    description: "Flipkart Grid 5.0, Robotics Challenge",
    imageSrc:
      Achieve2,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

const Achievement = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-12 lg:max-w-none lg:py-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            Achievements
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-16 lg:space-y-0">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="group relative p-6 border rounded-3xl overflow-hidden shadow-xl shadow-red-300 hover:scale-110 transition-transform duration-300"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-base font-semibold text-gray-900">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;