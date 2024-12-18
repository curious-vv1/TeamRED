import React from "react";

const About = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-16 lg:px-8">
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.red.100),white)] opacity-20" /> */}
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-red-600/10 ring-1 ring-red-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="mx-auto h-12 text-4xl text-center font-semibold">
          About Us
        </div>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-600 sm:text-2xl sm:leading-9">
            <p>
              “We're a tight-knit group of exceptional individuals on a mission
              to bring the magic of robotics to the world. Each one of us is a
              powerhouse of unique skills, and together, we create a blend
              that's nothing short of extraordinary. Our secret sauce? Stellar
              communication and a knack for collaboration that turns projects
              into groundbreaking experiences. We don't just aim for success; we
              chase the impossible and turn it into possible. Every project is a
              canvas where we paint our collective expertise, ensuring not just
              success but redefining what success means. For us, robotics isn't
              just a career; it's a shared dream that pulses through our veins.
              As a united front, we envision a world that's not just tech-savvy
              but also beautifully comfortable, all thanks to the wonders of
              robotics.”
            </p>
          </blockquote>
          {/* <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption> */}
        </figure>
      </div>
    </section>
  );
};

export default About;