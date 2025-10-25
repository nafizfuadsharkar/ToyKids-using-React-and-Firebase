import React from "react";
import toyImage from "../assets/img11.jpg"; 

const Section1 = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 px-4">
        
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Welcome to ToyKids
          </h1>
          <p className="text-gray-600 mb-6">
            Discover the best toys for your kids. Safe, fun, and educational toys
            delivered right to your doorstep!
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={toyImage}
            alt="Toy"
            className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
