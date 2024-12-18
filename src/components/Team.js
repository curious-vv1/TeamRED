import React from "react";
import Vivek from "../assets/vivek.JPG";
import Pawan from "../assets/pawan.JPG";
import Shirshak from "../assets/shirshak.JPG";
import Ujjawal from "../assets/ujjawal.JPG";
import Shrijal from "../assets/shrijal.JPG";
import Raj from "../assets/raj.JPG";
import Abhijeet from "../assets/abhijeet.jpeg";
import Sakshi from "../assets/sakshi.jpeg";
import Shashi from "../assets/shashi.png";


const people = [
  {
    name: "Pawan Maddheshiya",
    role: "Team Captain",
    imageUrl: Pawan,
  },
  {
    name: "Shirshak Ghatak",
    role: "Team Vice Captain",
    imageUrl: Shirshak,
  },
  {
    name: "Kumar Ujjawal",
    role: "Mathematics Head",
    imageUrl: Ujjawal,
  },
  {
    name: "Vivek Kumar",
    role: "Software Head",
    imageUrl: Vivek,
  },
  {
    name: "Shrijal",
    role: "Electronics Head",
    imageUrl: Shrijal,
  },
  {
    name: "Raj Mehta",
    role: "Mechanical Head",
    imageUrl: Raj,
  },
  {
    name: "Abhijeet Awasthi",
    role: "Core Member",
    imageUrl: Abhijeet,
  },
  {
    name: "Sakshi Meena",
    role: "Core Member",
    imageUrl: Sakshi,
  },
  {
    name: "Shashikant Pandey",
    role: "Core Member",
    imageUrl: Shashi,
  },
];

const Team = () => {
  return (
    <div
      className="bg-white py-12
     sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl">
          <h2 className="lg:text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Team
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p> */}
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-red-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
