import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Quotes from "./Components/Quotes/Quotes";
import Banner from "./Components/Banner/Banner";
import Banner2 from "./Components/Banner/Banner2";
import Features from "./Components/Features/Features";
import AppStore from "./Components/AppStore/AppStore";
import Footer from "./Components/Footer/Footer";
import PopupPlayer from "./Components/PopupPlayer/PopupPlayer";
import AOS from "aos";
import "aos/dist/aos.css";
import Product from "./Components/Product/Product";
import Pricing from "./Components/Pricing/Pricing";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";

const App = () => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(prev => !prev);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Get current route
  const location = useLocation();

  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Conditionally render components only on Home route */}
      {location.pathname === "/" && (
        <>
          <Quotes />
          <Banner togglePlay={togglePlay} />
          <Banner2 togglePlay={togglePlay} />
          <Features />
          <AppStore />
        </>
      )}

      {/* Footer is displayed on all pages */}
      <Footer />

      {/* PopupPlayer is displayed on all pages */}
      <PopupPlayer isPlay={isPlay} togglePlay={togglePlay} />
    </main>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
