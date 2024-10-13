import "./ProjectsFramer.css";
import { useEffect, useState } from "react";
import { initialTabs as tabs } from "./ProjectsFramerConstants";
import { motion, AnimatePresence } from "framer-motion";
const ProjectsFramer = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  useEffect(() => {
    console.log(selectedTab.label);
  }, [selectedTab]);
  return (
    <div className="projects">
      <nav>
        <ul className="flex items-center justify-center">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.label}`}
              {item === selectedTab ? (
                <motion.div layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 items-center h-full w-full"
          >
            <div className="flex justify-evenly">
              {selectedTab ? <img src={selectedTab.thumbnail} /> : null}
            </div>
            <div className="flex justify-evenly">
              {selectedTab ? <p>{selectedTab.text}</p> : null}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default ProjectsFramer;
