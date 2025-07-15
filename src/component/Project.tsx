// import React, { useState } from "react";

import { Link } from "react-router-dom";

const Project = () => {
  const projects = [
    {
      heading: "Website",
      title: "Nuteam",
      desc: "Penyusunan tampilan web yang rapi dan responsif menggunakan teknik CSS modern.",
      image: "/img/nuteam.png",
    },
    {
      heading: "Mobile",
      title: "Wedding",
      desc: "Pengembangan aplikasi mobile lintas platform dengan performa tinggi menggunakan React Native.",
      image: "/img/invitations.png",
    },
    {
      heading: "Website",
      title: "Safrenz",
      desc: "Halaman promosi yang dirancang untuk menarik perhatian dan meningkatkan konversi.",
      image: "/img/safrenz.png",
    },
    {
      heading: "Mobile",
      title: "Travel",
      desc: "Desain antarmuka aplikasi mobile yang estetis, intuitif, dan fokus pada pengalaman pengguna.",
      image: "/img/travelop.png",
    },
  ];

  return (
    <section
      className="relative py-10 px-3 sm:px-6 md:px-6 lg:px-8 xl:px-8 text-black overflow-hidden"
      id="ourWorks"
      // style={{
      //   backgroundImage:
      //     'url("/img/biru.svg"), url("/img/ungu.svg"), url("/img/kuning.svg")',
      //   backgroundRepeat: "no-repeat, no-repeat",
      //   backgroundSize: "cover, cover",
      //   backgroundPosition: "center, center",
      // }}
    >
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col justify-between items-center mb-4 sm:mb-10">
          <h2 className="text-3xl xl:text-4xl font-bold md:mb-0 mb-5">
            <span className="text-blue-500">Our</span> Works
          </h2>

          <div className="block">
            <a
              href="#"
              className=" group flex items-center gap-2 text-sm px-8 py-2 border border-blue-600 text-blue-600 rounded-full font-medium bg-white shadow-md ring-1 ring-blue-300/40 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              See More Of Our Works
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 transition duration-300 group-hover:fill-white"
              >
                <path d="M11.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 010-1.414z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-blue-500 to-blue-200 p-4  lg:mb-16 sm:p-6 xl:p-8 rounded-xl shadow-lg flex flex-col sm:flex-row items-start min-h-96"
            >
              <div className="w-full sm:w-1/2 relative">
                <h3 className="text-gray-200 text-base sm:text-lg xl:text-xl font-semibold py-2">
                  {project.heading}
                </h3>

                <div className="absolute">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="left-0 object-cover !rounded-4xl bg-red-500"
                  />
                </div>
              </div>

              <div className="sm:ml-4 mt-4 sm:mt-0 w-full sm:w-1/2 text-left z-10 flex flex-col justify-center h-full">
                <span className="text-base sm:text-lg lg:text-xl font-semibold text-white">
                  {project.title}
                </span>
                <p className="text-sm sm:text-xs lg:text-base mt-1 text-gray-100">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bawah gak ada harusnya */}

      <div className="sm:hidden flex flex-row space-x-4 py-2 overflow-x-auto scrollbar-hide">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 min-w-[280px] w-72 rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white"
          >
            <div
              className="relative h-48"
              style={{
                backgroundImage: `url('${project.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="relative px-4 py-6">
              <h4 className="font-semibold text-xl text-gray-900">
                {project.title}
              </h4>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {project.desc}
              </p>
              <Link
                to="/explore"
                className="group inline-flex items-center gap-2 text-sm mt-4 px-5 py-1.5 border border-blue-600 text-blue-600 rounded-full font-medium bg-white shadow-sm ring-1 ring-blue-300/40 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <span className="transition-colors duration-300 group-hover:text-white">
                  Detail
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 transition-colors duration-300 group-hover:fill-white"
                >
                  <path d="M11.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 010-1.414z" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
