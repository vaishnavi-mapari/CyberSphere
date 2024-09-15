import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const AppStore = () => {
  return (
    <div className="container py-10 sm:min-h-[400px] sm:grid sm:place-items-center">
      <div className="space-y-6 max-w-xl mx-auto text-center">
        <h1
          data-aos="fade-up"
          className="text-2xl sm:text-4xl font-semibold"
        >
          Download Our App Today
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center sm:px-20"
        >
          Discover the ultimate VR movie experience with our platform. Explore a new world of entertainment where every moment is immersive and unforgettable.
        </p>
        <div className="flex flex-wrap justify-center gap-4 items-center">
          <a
            href="#"
            data-aos="fade-up"
            data-aos-delay="500"
            className="transition-transform transform hover:scale-105"
          >
            <img
              src={AppStoreImg}
              alt="Download on the App Store"
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            />
          </a>
          <a
            href="#"
            data-aos="fade-up"
            data-aos-delay="700"
            className="transition-transform transform hover:scale-105"
          >
            <img
              src={PlayStoreImg}
              alt="Get it on Google Play"
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
