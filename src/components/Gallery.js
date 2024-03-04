import React from "react";
import Gallery1 from "../assets/gallery1.jpg";
import Gallery2 from "../assets/gallery2.jpg";
import Gallery3 from "../assets/gallery3.jpg";
import Gallery4 from "../assets/gallery4.jpg";
import Gallery5 from "../assets/gallery5.jpg";
import Gallery6 from "../assets/gallery6.jpg";
import Gallery7 from "../assets/gallery7.jpg";
import Gallery8 from "../assets/gallery8.jpg";
import Gallery9 from "../assets/gallery9.jpg";
import Gallery10 from "../assets/gallery10.jpg";

const Gallery = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-900 text-center">Gallery</h2>

      {/* <div className="flex justify-center space-x-6 lg:space-x-8">
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div> */}

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4 pt-32">
            <div class="group h-96 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-96">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={Gallery1}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Unmanned Aerial Drone
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  
                </p>
                
              </div>
            </div>
            <div class="group h-96 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-96">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={Gallery2}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Line Following Bot
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Enyugma '22, IIIT Bhagalpur
                </p>
                
              </div>
            </div>
          </div>
          <div className="grid gap-4">
          <div class="group h-96 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-96">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={Gallery3}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="pt-8 absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Cylinderical Manipulator
                </h1>
                <p class="text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Amalthea'23,IIT Gandhinagar
                </p>
                
              </div>
            </div>
            <div class="group h-96 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-96">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={Gallery4}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Robotic Arm
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Cognizance'23, IIT Roorkee
                </p>
                
              </div>
            </div>
            <div class="group h-96 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-96">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={Gallery5}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  RC Plane
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Cognizance'23,IIT Roorkee
                </p>
                
              </div>
            </div>
          </div>
          <div className="grid gap-4">
          <div class="group h-96 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-96">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={Gallery6}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="pt-8 absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                 Cylinderical Manipulator
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Amalthea'22, IIT Gandhinagar
                </p>
                
              </div>
            </div>
            <div class="group h-96 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-96">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={Gallery7}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="pt-6 absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Team Red
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  We build robots that build the future
                </p>
                
              </div>
            </div>
            <div class="group h-96 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-96">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={Gallery8}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Team Red
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Enyugma'22, IIIT Bhagalpur
                </p>
                
              </div>
            </div>
          </div>
          <div className="grid gap-4 pt-32">
          <div class="group h-96 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-96">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={Gallery9}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Team Red
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Amalthea'22, IIIT Bhagalpur
                </p>
                
              </div>
            </div>
            <div class="group h-96 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-96">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={Gallery10}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Team Red
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Amalthea'22, IIIT Bhagalpur
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;