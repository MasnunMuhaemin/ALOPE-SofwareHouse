import React from "react";

interface CardProps {
  heading: string;
  title: string;
  desc: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ heading, title, desc, image }) => {
  return (
    <div className="bg-blue-400 text-white p-4 lg:mb-16 sm:p-6 xl:p-8 rounded-xl shadow-lg flex flex-col sm:flex-row items-start min-h-[300px]">
      <div className="w-full sm:w-1/2 relative">
        <h3 className="text-base sm:text-lg xl:text-xl font-semibold py-2">
          {heading}
        </h3>
        <div className="relative h-[150px] sm:h-[180px] md:h-[200px]">
          <img
            src={image}
            alt={title}
            className="absolute bottom-[-120px] sm:bottom-[-5px] lg:bottom-[-100px] h-[250px] sm:h-[200px] lg:h-[300px] w-full left-0 rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
      <div className="sm:ml-4 mt-4 sm:mt-0 w-full sm:w-1/2 text-left z-10 flex flex-col justify-center h-full">
        <div className="w-3 h-3 bg-white rounded-full mb-1" />
        <span className="text-base sm:text-lg lg:text-xl font-semibold">
          {title}
        </span>
        <p className="text-sm sm:text-xs lg:text-base mt-1 text-justify">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
