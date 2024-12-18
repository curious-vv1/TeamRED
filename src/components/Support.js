import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Achieve0 from "../assets/achieve0.jpeg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cylinder0 from "../assets/cylinder0.jpeg";

const features = [
  {
    name: "Custom Livery:",
    description:
      "Our bot will have a custom livery displaying all our sponsors in great glory in front of researchers and organizations from all around the nation.",
    // icon: CloudArrowUpIcon,
  },
  {
    name: "T-shirts and Merchandise presence:",
    description:
      "Display your company logo on our exclusive merchandise making an impactful presence.",
    // icon: LockClosedIcon,
  },
  {
    name: "Social-Media and Website References:",
    description:
      "All our sponsors will be given a special shoutout on the institutes as well as the teams social media pages and would be an eternal part of the sponsors gallery on our website.",
    // icon: ServerIcon,
  },
];


const helps = [
  {
    name: "Monetary Funding:",
    description:
      "There are no minimum thresholds, we accept and are thankful for whatever amount you could sponsor.",
    // icon: CloudArrowUpIcon,
  },
  {
    name: "Parts and Components:",
    description:
      "Any hardware you could provide from our list of requirements would be of great help to us.",
    // icon: LockClosedIcon,
  },
];

const Support = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="overflow-hidden mt-24 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                {/* <h2 className="text-base font-semibold leading-7 text-red-600">
                  Why Support Us?
                </h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  What we can do for you
                </p>
                {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                  <span className="text-gray-900 font-semibold">
                    Elevate Your Brand, Fuel Innovation, Shape the Future.
                  </span>
                  
                </p> */}
                <dl className="mt-2 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        {/* <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      /> */}
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-2 text-lg font-semibold leading-8 text-gray-900">
                  Join us – let's discuss the possibilities and forge a
                  partnership that creates lasting impact.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <Link
                  to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=team.red.iiitbh@gmail.com"
                  className="rounded-md bg-red-600 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Mail us
                </Link>
              </div>
            </div>
            <img
              src={Achieve0}
              alt="Team RED"
              className="w-full h-auto max-w-full max-h-full rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:mt-6"
            />
          </div>

          <div className="mx-6 grid max-w-2xl pt-16 grid-cols-1 gap-x-8 gap-y-6 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <img
              src={Cylinder0}
              alt="Team RED"
              className="w-full h-auto max-w-full max-h-full rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:mt-6"
            />
            <div className="lg:pr-8 lg:pt-12">
              <div className="lg:max-w-lg">
                {/* <h2 className="text-base font-semibold leading-7 text-red-600">
                  Why Support Us?
                </h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How can you support us?
                </p>
                {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                  <span className="text-gray-900 font-semibold">
                    Elevate Your Brand, Fuel Innovation, Shape the Future.
                  </span>
                  
                </p> */}
                <dl className="mt-2 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                  {helps.map((help) => (
                    <div key={help.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        {/* <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      /> */}
                        {help.name}
                      </dt>{" "}
                      <dd className="inline">{help.description}</dd>
                    </div>
                  ))}
                </dl>
                {/* <p className="mt-2 text-lg font-semibold leading-8 text-gray-900">
                  Join us – let's discuss the possibilities and forge a
                  partnership that creates lasting impact.
                </p> */}
              </div>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <Link
                  to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=team.red.iiitbh@gmail.com"
                  className="rounded-md bg-red-600 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Support Team RED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;