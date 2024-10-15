import {
    Arm,
    BArm,
    CArm,
    Rover
} from "./../assets/assets.js";

// const works = [
//     {
//       name: "Robotic Arm",
//       description:
//         "An intelligent robotic arm with advanced workspace analysis techniques with integrated AI techniques for path planning and object pick place mechanism.",
//       status: "ongoing",
//       image:
//         Arm0,
//     },
//     {
//       name: "Autonomous Drone",
//       description:
//         "An autonomous flying drone having the capabilities of accepting missions & can complete the Mission without human intervention, enough to avoid obstacles, and perform operations based on image.",
//       status: "ongoing",
//       image:
//         Drone0,
//     },
//     {
//       name: "Maze Solver Robot",
//       description:
//         "An autonomous car with maze solving capabilities traversing path avoiding dynamic obstacles and creating a successful shortest path between two points in a any traversed map",
//       status: "Completed",
//       image:
//         Lfr0,
//     },
//     {
//       name: "Cylinderical Manipulator",
//       description:
//         "A robotic manipulator with a revolute joint allowing access to cylindrical C-space equipped with advanced drilling end effector for soil analysis.",
//       status: "Completed",
//       image:
//         Manipulator0,
//     },
//     {
//       name: "RC Plane",
//       description:
//         "A remote controlled plane which has high maneuverability to do aerobatics",
//       status: "Completed",
//       image:
//         Rcplane0,
//     },
//     // {
//     //   name: "Robotic Arm",
//     //   description:
//     //     "cvkjbdfjbh jdfjgvbjvkdfjvdf jdfvjdjb jkbsdjbsdjkawhiejvnjdsfjve jsvdfhve",
//     //   status: "ongoing",
//     //   image:
//     //     "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png",
//     // },
//   ];

const allProjects = [
    { thumbnail: Arm, label: "Arm Bot", text: "The structure is a user-defined data type that is available in C++. Structures are used to combine different" },
    { thumbnail: BArm, label: "BArm Bot", text: "The structure is a user-defined data type that is available in C++. Structures are used to combine different" },
    { thumbnail: CArm, label: "CArm Bot", text: "The structure is a user-defined data type that is available in C++. Structures are used to combine different" },
    { thumbnail: Rover, label: "Rover", text: "The structure is a user-defined data type that is available in C++. Structures are used to combine different" },
];

const [tomato, lettuce, cheese, banana] = allProjects;
const initialTabs = [tomato, lettuce, cheese, banana];

const getNextProject = (ingredients) => {
    const existing = new Set(ingredients);
    return allProjects.find((ingredient) => !existing.has(ingredient.label));
}

export {
    initialTabs, getNextProject, allProjects
}