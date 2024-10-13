import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="">
      <div className="bg-black h-full">
        <Navbar />
        <Hero />
        <Projects />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
