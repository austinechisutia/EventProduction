import React from "react";
import crowd from '../assets/images/crowd.jpg';
import concert from '../assets/images/concert.jpg';

export default function Solutions() {
  return (
    <div className="w-full py-20 px-4 mt-20 flex flex-col items-center gap-20">

      {/* 1. Title + Description */}
      <div className="max-w-2xl text-center flex flex-col gap-10">
        <h2 className="text-4xl lg:text-6xl sm:text-3xl font-semibold text-gray-900">
          Our Solutions
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          We craft simple and powerful tools that make your projects smoother,
          faster, and more reliable. Every solution is built with clarity and purpose.
        </p>
      </div>

      {/* 2. Option Bar */}
      <div className="w-full flex justify-between bg-gray-200 rounded-full p-2 text-black">
        <button className="px-4 py-2 bg-white rounded-full shadow-sm text-sm sm:text-base">
          Option One
        </button>

        <button className="px-4 py-2 bg-white rounded-full shadow-sm text-sm sm:text-base">
          Option Two
        </button>

        <button className="px-4 py-2 bg-white rounded-full shadow-sm text-sm sm:text-base">
          Option Three
        </button>
      </div>

      {/* 3. Image + Description */}
      <div className="w-full flex flex-col md:flex-row items-center gap-6 bg-white rounded-lg shadow-sm ">
        
        {/* Left Image */}
        <img
          src={concert}
          alt="solution"
          className="w-full md:w-1/2 rounded shadow-md object-cover filter grayscale hover:grayscale-0 transition duration-300"
        />

        {/* Right Description */}
        <div className="md:w-1/2 flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-black">
            A Better Way to Work
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            This section explains how your solution fits into the user’s world.
            You can talk about speed, ease of use, or the way your tools
            remove stress like wiping fog from glass.
          </p>
        </div>

      </div>
    </div>
  );
}
