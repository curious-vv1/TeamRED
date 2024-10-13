import { Footer } from "../assets/assets";

const ContactUs = () => {
  return (
    <div
      className="relative text-white bg-cover bg-no-repeat bg-top mt-8"
      style={{ backgroundImage: `url(${Footer})` }}
    >
      <div className="m-auto max-w-screen-xl px-4">
        <div className="h-12 sm:h-24"></div>
        <p className="text-6xl font-bold">Contact</p>
        <div className="h-8 sm:h-12"></div>
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <a
              href="mailto:hellorobot@orangewood.co"
              className="underline sm:text-lg"
            >
              hellorobot@orangewood.co
            </a>
            <div className="h-5"></div>
            <p className="font-medium sm:text-xl">Orangewood Labs Inc.</p>
            <p className="font-light sm:text-xl">
              2 Marina Blvd, Building B, 2nd floor, San Francisco, CA 94123
            </p>
            <div className="h-5"></div>
            <p className="font-medium sm:text-xl">
              Orangewood Research and Advancement Private Limited
            </p>
            <p className="font-light sm:text-xl">
              Second Floor, A-48, Sector-67, Noida, Gautam Buddha Nagar, Uttar
              Pradesh, 201301
            </p>
            <p className="font-light sm:text-xl">
              Contact Number: +91 79769 97082
            </p>
            <div className="h-8 sm:h-12"></div>
            <div className="flex items-center gap-2">
              <a href="/privacy-policy" className="sm:text-xl">
                Privacy Policy
              </a>
              <div className="h-4 w-px bg-white sm:h-5"></div>
              <a href="/terms-and-conditions" className="sm:text-xl">
                Terms and Conditions
              </a>
            </div>
            <div className="h-5"></div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/orangewoodlabs/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full border border-primary flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://twitter.com/OrangewoodLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full border border-primary flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@OrangewoodLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full border border-primary flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/orangewood-labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full border border-primary flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div>
              <p className="pb-1 text-2xl">Support our journey!</p>
              <p>Join us in powering the future of robotics with RoboGPT</p>
              <div className="h-2"></div>
              <a
                href="https://www.ycombinator.com/launches/Iwk-orangewood-labs-robogpt"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-48"
              >
                <div className="relative" style={{ paddingBottom: "21.6%" }}>
                  <img
                    alt="yc launch"
                    loading="lazy"
                    className="absolute h-full w-full"
                    src="https://www.ycombinator.com/launches/Iwk-orangewood-labs-robogpt/upvote_embed.svg"
                  />
                </div>
              </a>
            </div>
            <div>
              <p className="pb-1 pt-4 text-2xl">Backed By</p>
              <div className="flex gap-2">
                <a
                  href="https://www.ycombinator.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10"
                >
                  <img
                    alt="Y Combinator"
                    className="h-full w-full"
                    src="/footer/yc.png"
                  />
                </a>
                <a
                  href="https://www.techstars.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10"
                >
                  <img
                    alt="TechStars"
                    className="h-full w-full"
                    src="/footer/techstars.png"
                  />
                </a>
                <a
                  href="https://samsungnext.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10"
                >
                  <img
                    alt="Samsung Next"
                    className="h-full w-full"
                    src="/footer/samsungnext.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-12 sm:h-24"></div>
      </div>
    </div>
  );
};

export default ContactUs;
