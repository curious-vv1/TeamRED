import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Achievements", href: "/#achievement" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#" },
];

const Footer = () => {
  return (
    <div className="bg-red-400">
      <div className="max-w-2xl mx-auto text-gray-900 py-10">
        <div className="my-4 flex flex-col md:flex-row md:justify-between items-center text-sm text-white">
          {/* <p className="order-2 md:order-1 mt-8 md:mt-0 text-base">
            About us
          </p>
          <p className="order-2 md:order-1 mt-8 md:mt-0 text-base">
            Achievements
          </p>
          <p className="order-2 md:order-1 mt-8 md:mt-0 text-base">
            Sponsors
          </p>
          <p className="order-2 md:order-1 mt-8 md:mt-0 text-base">
            Projects
          </p> */}
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base  font-semibold leading-6 text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="my-8 flex flex-row justify-around items-center text-sm text-gray-200">
          <FontAwesomeIcon
            icon={faInstagram}
            className="order-2 md:order-1 mt-8 md:mt-0 mr-4 text-4xl"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="order-2 md:order-1 mt-8 md:mt-0 mr-4 text-4xl"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="order-2 md:order-1 mt-8 md:mt-0 mr-4 text-4xl"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className="order-2 md:order-1 mt-8 md:mt-0 mr-4 text-4xl"
          />
        </div>
        <div className="text-center mt-8 text-white">© Team R.E.D, 2023</div>
      </div>
    </div>
  );
};

export default Footer;