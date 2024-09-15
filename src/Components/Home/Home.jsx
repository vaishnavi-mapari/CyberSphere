import React from "react";
import HeroPng from "../../assets/hero.png";
import { BiPlayCircle } from "react-icons/bi";

const Home = ({ togglePlay }) => {
  return (
    <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
      <div className="container min-h-[700px] flex relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
          {/* Hero Text Section */}
          <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
            <h1 data-aos="fade-up" data-aos-delay="300" className="text-4xl font-semibold">
              EMBARK ON A JOURNEY INTO VR{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                GAMES WITH OUR PLATFORM
              </span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Dive into an immersive world where virtual reality redefines your gaming experience. Engage in exciting adventures and discover new dimensions of fun with our cutting-edge platform.
            </p>
            <div className="flex gap-6">
              <button
                data-aos="fade-up"
                data-aos-delay="700"
                className="primary-btn py-2 px-4 rounded-md shadow-md hover:bg-primary-dark transition"
              >
                Get Started
              </button>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                onClick={togglePlay}
                className="flex items-center gap-2 py-2 px-4 rounded-md border border-transparent bg-secondary hover:bg-secondary-dark text-white transition"
              >
                <BiPlayCircle className="text-3xl" />
                See Demo
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="order-1 sm:order-2"
          >
            <img src={HeroPng} alt="VR Games Banner" className="w-full max-w-[500px] rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Animated Blob */}
        <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl opacity-50 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Home;
