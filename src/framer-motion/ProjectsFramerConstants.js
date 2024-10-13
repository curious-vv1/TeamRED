import {
    Arm,
    BArm,
    CArm,
    Rover
} from "./../assets/assets.js"

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