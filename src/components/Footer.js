import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Achievements", href: "/#achievement" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Team", href: "/#team" },
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
              className="text-base  font-semibold leading-6 text-white hover:text-gray-100 transition-transform duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="my-8 flex flex-row justify-around items-center text-sm text-white">
          <Link to="https://www.instagram.com/team_r.e.d/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="order-2 md:order-1 mt-8 md:mt-0 mr-4 text-4xl hover:text-gray-100 transition-transform duration-300"
            />
          </Link>

          <Link to="https://github.com/orgs/TeamRED-iiitbh/repositories">
            <FontAwesomeIcon
              icon={faGithub}
              className="order-2 md:order-1 mt-8 md:mt-0 mr-4 text-4xl hover:text-gray-100 transition-transform duration-300"
            />
          </Link>
          <Link to="https://www.linkedin.com/company/team-red-iiitbh">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="order-2 md:order-1 mt-8 md:mt-0 mr-4 text-4xl hover:text-gray-100 transition-transform duration-300"
            />
          </Link>
          <Link to="https://www.youtube.com/channel/UCKQeB_njjSxYcJBzSG1_mnQ">
            <FontAwesomeIcon
              icon={faYoutube}
              className="order-2 md:order-1 mt-8 md:mt-0 mr-4 text-4xl hover:text-gray-100 transition-transform duration-300"
            />
          </Link>
        </div>
        <p className="text-center mt-8 text-white hover:text-gray-100 transition-transform duration-300">© Team R.E.D, 2023</p>
      </div>
    </div>
  );
};

export default Footer;