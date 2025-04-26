import React from "react";
import bg from "../../assets/bg.png"


function Hero() {
  return (
    <section className="flex items-center justify-between px-16 py-10 bg-white">
      {/* Left Side - Text Content */}
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Find, book and travel{" "}
          <span className="text-blue-600 relative">
            Easily
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-md"></span>
          </span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Get a car wherever and whenever you need, from your phone.
        </p>
        <p className="mt-2 text-gray-800 italic text-lg">
          Your pick of rides at low prices !
        </p>
      </div>

      {/* Right Side - Car Image */}
      <div className="w-1/2">
        <img
          src= {bg}
          alt="Blue Porsche"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default Hero;
