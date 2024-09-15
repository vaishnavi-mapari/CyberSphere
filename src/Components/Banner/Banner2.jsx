import React from "react";
import BannerPng from "../../assets/banner2.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner2 = ({ togglePlay }) => {
  return (
    <div className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* Text Content Section */}
          <div className="order-2 sm:order-1 lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl sm:text-5xl font-semibold"
              >
                Get Ready to Enjoy VR{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Movies with Our Platform
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500" className="text-lg">
                Dive into a world where virtual reality transforms every movie into an unforgettable journey. Experience unparalleled immersion and engage with entertainment like never before. Discover how our platform redefines your viewing experience, making each moment captivating and immersive.
              </p>
              <div className="flex gap-6">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="py-2 px-4 bg-primary text-white rounded-md shadow-md hover:bg-primary-dark transition"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="900"
                  onClick={togglePlay}
                  className="flex items-center gap-2 py-2 px-4 bg-secondary text-white rounded-md border border-transparent hover:bg-secondary-dark transition"
                >
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div>
            </div>
            {/* Background Color Blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-150px] right-[-150px] blur-3xl opacity-50"></div>
          </div>

          {/* Image Section */}
          <div data-aos="fade-up" className="order-1 sm:order-2">
            <img src={BannerPng} alt="VR Movies Banner" className="w-full max-w-[400px] rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
