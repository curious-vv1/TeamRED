import Achievements from "./components/Achievements";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-black h-full">
      <Navbar />
      <Hero />
      <Projects />
      <Achievements />
      <ContactUs />
    </div>
  );
}

export default App;
