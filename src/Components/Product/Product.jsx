import React from "react";
import { FaHeadphonesAlt, FaHandRock, FaGamepad } from "react-icons/fa";

// Product Data
const products = [
  { id: 1, name: "VR Headset Pro", description: "High-definition VR headset with immersive audio.", price: "$299.99", icon: <FaHeadphonesAlt className="text-5xl text-primary group-hover:text-black duration-300" /> },
  { id: 2, name: "VR Motion Controller", description: "Advanced motion controllers for precise tracking.", price: "$149.99", icon: <FaHandRock className="text-5xl text-primary group-hover:text-black duration-300" /> },
  { id: 3, name: "VR Gaming Bundle", description: "Complete bundle with headset, controllers, and games.", price: "$399.99", icon: <FaGamepad className="text-5xl text-primary group-hover:text-black duration-300" /> },
];

const Product = () => {
  return (
    <div className="container py-14 sm:min-h-[600px]">
      <h1 className="text-3xl font-semibold text-center sm:text-4xl mb-12">Our VR Products</h1>

      {/* Product card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map(({ id, name, description, price, icon }) => (
          <div
            key={id}
            className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300"
          >
            <div className="grid place-items-center">
              {icon}
            </div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>{description}</p>
            <p className="text-xl font-semibold">{price}</p>
            <a
              href="#"
              className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
