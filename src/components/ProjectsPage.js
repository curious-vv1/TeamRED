import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import roboticArm0 from "../assets/roboticArm0.jpeg";
import roboticArm1 from "../assets/roboticArm1.jpeg";
import roboticArm2 from "../assets/roboticArm2.jpeg";
import roboticArm3 from "../assets/roboticArm3.jpg";
import cylinder0 from "../assets/cylinder0.jpeg";
import cylinder1 from "../assets/cylinder1.jpeg";
import Lfr0 from "../assets/lfr0.jpg";

const works = [
  {
    Project: "Robotic Arm",
    Description:
      "A robotic arm is a type of mechanical arm, usually programmable, with similar functions to a human arm; the arm may be the sum total of the mechanism or may be part of a more complex robot. The links of such a manipulator are connected by joints allowing either rotational motion (such as in an articulated robot) or translational (linear) displacement. The terminus of the kinematic chain of the manipulator is called the end effectors and it is analogous to the human hand. The end effectors, or robotic hand, can be designed to perform any desired task such as welding, gripping, spinning etc., depending on the application",
    features: [
      {
        name: "Controller",
        description:
          "Raspberry pi(Raspberry Pi is a series of small, low-cost, and versatile single-board computers that can run Linux and be used for various purposes, such as education, robotics, media, and IoT.)",
      },
      {
        name: "Sub-system",
        description:
          "ROS(ROS (Robot Operating System) is a flexible framework for writing robot software that provides services such as hardware abstraction, message-passing, package management, and more1)",
      },
      {
        name: "Algorithm",
        description:
          "Hybrid A∗(Hybrid A* is a path planning algorithm that combines the efficiency of A* with the ability to handle non-holonomic constraints and continuous state spaces)",
      },
      {
        name: "Simulation",
        description:
          "Gazebo and Rviz(Gazebo is a 3D robot simulator that can model the physics and dynamics of robots in various environments, while RViz is a 3D visualization tool that can display the robot state and sensor data from Gazebo or real robots)",
      },
      {
        name: "Technology stack",
        description: "ROS,Solidworks,Raspberry operating system",
      },
      {
        name: "Github",
        description: " ",
      },
    ],
    images: [roboticArm1, roboticArm2, roboticArm0, roboticArm3],
  },
  {
    Project: "Cylindrical manipulator",
    Description:
      "Cylindrical manipulator robots are designed for a specialized cylindrical workspace, offering dynamic linear and rotational movements. With vertical and radial axes, they can navigate obstacles, making them ideal for confined spaces. These robots are cost-effective and commonly used in assembly and packaging for tasks like loading/unloading machines. Integration with OpenCV enhances their capabilities, enabling real-time perception and autonomy for tasks like object recognition and manipulation. This makes them well-suited for automation in complex environments. ",
    features: [
      {
        name: "Controller",
        description: "Arduino mega",
      },
      {
        name: "Sub-system",
        description:
          "CNC shield(The CNC Shield V3 is an extension board for Arduino UNO or Mega that allows you to easily control stepper motors and other elements of a CNC machine)",
      },
      {
        name: "Algorithm",
        description:
          "GRBL(GRBL is a motion control algorithim that interprets G-code and converts it into low-level commands for stepper motors of a CNC machine)",
      },
      {
        name: "Simulation",
        description:
          "proteus(The Proteus Design Suite is a proprietary software tool suite used primarily for electronic design automation. )",
      },
      {
        name: "Technology stack",
        description: "Arduino ide ,Proteus,solidworks,GRBL",
      },
      {
        name: "Github",
        description: " ",
      },
    ],
    images: [cylinder0, cylinder1, cylinder0, cylinder1],
  },
  {
    Project: "Line Following Bot",
    Description:
      "The line-following robot, equipped with infrared sensors to trace a designated black line, adeptly traverses the specified path. This autonomous marvel gracefully follows lines on the ground, discerning dark lines on light surfaces or light lines on dark surfaces. Beyond its line-following prowess, the robot seamlessly integrates maze-solving algorithms into its repertoire. It efficiently navigates through mazes in a single run, utilizing intelligent algorithms to read the maze layout. Upon reaching the maze's end, it not only accomplishes the journey but also intelligently returns, optimizing its path for the shortest route.",
    features: [
      {
        name: "Controller",
        description:
          "Arduino uno(The Arduino Uno is an open-source microcontroller board based on the Microchip ATmega328P microcontroller (MCU))",
      },
      {
        name: "Sub-system",
        description:
          "Infrared array(They work by emitting infrared (IR) light and detecting the light levels that return to the sensor)",
      },
      {
        name: "Algorithm",
        description:
          "LSRB(LSRB is an algorithm used by robots to solve mazes. L stands for 'LEFT', S for 'STRAIGHT', R for RIGHT, and B for 'BACK' or BACKWARD. These LEFT, RIGHT, STRAIGHT, and BACK are the directions that the robot follows. The robot remembers its path by storing each turn as a letter in the array.)",
      },
      {
        name: "Simulation",
        description:
          "proteus(The Proteus Design Suite is a proprietary software tool suite used primarily for electronic design automation. )",
      },
      {
        name: "Technology stack",
        description: "Arduino ide,Proteus",
      },
      {
        name: "Github",
        description: " ",
      },
    ],
    images: [Lfr0, Lfr0, Lfr0, Lfr0],
  },
];

const ProjectsPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <h1 className="text-4xl font-bold text-center tracking-tight pt-16 mt-12 mb-12 text-gray-900 sm:text-6xl">
        Projects
      </h1>
      {works.map((work) => (
        <div className="mx-auto border rounded-3xl shadow-xl shadow-red-300 mb-12 grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {work.Project}
            </h2>
            <p className="mt-4 text-gray-500">{work.Description}</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {work.features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="col-span-1">
              <img
                src={work.images[0]}
                className="rounded-lg bg-gray-100 hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="col-span-1">
              <img
                src={work.images[3]}
                className="rounded-lg bg-gray-100 hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="col-span-2">
              <img
                src={work.images[2]}
                className="rounded-lg bg-gray-100 hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default ProjectsPage;