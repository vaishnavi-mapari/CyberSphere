import React from "react";
import { IoClose } from "react-icons/io5";

const PopupPlayer = ({ isPlay, togglePlay }) => {
  return (
    <>
      {isPlay && (
        <div className="fixed z-[9999] top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="relative w-full sm:max-w-[600px] bg-white dark:bg-dark p-5 m-3 rounded-lg shadow-md">
            {/* Header Section */}
            <div className="flex items-center justify-between pb-3">
              <h1 className="text-2xl font-semibold">Metaverse</h1>
              <IoClose
                onClick={togglePlay}
                className="text-4xl cursor-pointer hover:scale-110 duration-300"
                aria-label="Close video player"
              />
            </div>

            {/* Video Player Section */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupPlayer;
