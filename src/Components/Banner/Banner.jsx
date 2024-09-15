import React from "react";
import BannerPng from "../../assets/banner1.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner = ({ togglePlay }) => {
  return (
    <div className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* Image Section */}
          <div data-aos="fade-up" data-aos-once="true">
            <img 
              src={BannerPng} 
              alt="Banner showcasing VR movies" 
              className="w-full max-w-[400px] rounded-lg shadow-lg" 
            />
          </div>
          {/* Text Content Section */}
          <div className="lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
                Get Ready to Enjoy VR{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Movies with Our Platform
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
                Unlock the ultimate VR movie experience with our platform. Journey through a new world of entertainment where every moment is deeply immersive and unforgettable.
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
                  data-aos-delay="700"
                  onClick={togglePlay}
                  className="flex items-center gap-2 py-2 px-4 rounded-md border border-transparent bg-secondary hover:bg-secondary-dark text-white transition"
                >
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div>
            </div>
            {/* Background Color Blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-100px] right-[-100px] blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
