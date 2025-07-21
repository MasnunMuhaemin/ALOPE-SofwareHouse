import React from "react";

interface CardProps {
  heading?: string;
  title?: string;
  desc?: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ heading, title, desc, image }) => {
  return (
    <>
      <div className=" bg-gradient-to-b from-blue-500 to-blue-200 text-white p-4 lg:mb-16 sm:p-6 xl:p-8 rounded-xl shadow-lg flex flex-row items-start min-h-[300px]">
        <div className="w-full sm:w-1/2 relative">
          <h3 className="text-base sm:text-lg xl:text-xl font-semibold py-2">
            {heading}
          </h3>
          <div className="relative h-[150px] sm:h-[180px] md:h-[200px]">
            <img
              src={image}
              alt={title}
              className="absolute bottom-[-120px] sm:bottom-[-5px] lg:bottom-[-100px] h-[250px] sm:h-[200px] lg:h-[300px] w-full left-0 rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="sm:ml-4 mt-4 sm:mt-0 w-full sm:w-1/2 text-left z-10 flex flex-col justify-center h-full">
          <span className="text-base sm:text-lg lg:text-xl font-semibold">
            {title}
          </span>
          <p className="text-sm sm:text-xs lg:text-base mt-1">{desc}</p>
        </div>
      </div>

      <div className="sm:hidden flex flex-row space-x-4 py-2 overflow-x-auto scrollbar-hide">
        <div className="flex-shrink-0 min-w-[280px] w-72 rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="relative px-4 py-6">
            <h4 className="font-semibold text-xl text-gray-900">{title}</h4>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
