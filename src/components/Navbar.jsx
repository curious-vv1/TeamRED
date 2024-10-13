import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex justify-between p-10" id="home">
      <Link to={"/"}>
        <img src="./vite.svg" alt="TeamRed Logo" />
      </Link>
      <div className="flex gap-12 mr-10">
        <Link to={"/"}>
          <Button variant="ghost" className="hover:scale-110 animate-pulse">
            Home
          </Button>
        </Link>
        <Link to={"about-us"} smooth={true} duration={500}>
          <Button variant="ghost" className="hover:scale-110">
            About Us
          </Button>
        </Link>
        <Link to={"projects"} smooth={true} duration={500}>
          <Button variant="ghost" className="hover:scale-110">
            Projects
          </Button>
        </Link>
        <Link to={"achievements"} smooth={true} duration={500}>
          <Button variant="ghost" className="hover:scale-110">
            Achievements
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
