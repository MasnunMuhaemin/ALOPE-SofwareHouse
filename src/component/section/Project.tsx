// import React, { useState } from "react";

import Card from "../element/Card";
import Button from "../element/Button";

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
    >
      <img
        src="/img/svg/biru.svg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        loading="lazy"
      />
      <img
        src="/img/svg/ungu.svg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        loading="lazy"
      />
      <img
        src="/img/svg/kuning.svg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        loading="lazy"
      />
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col justify-between items-center mb-4 sm:mb-10">
          <h2 className="text-3xl xl:text-4xl font-bold md:mb-0 mb-5">
            <span className="text-blue-500">Our</span> Works
          </h2>

          <Button title="See Detail" href="/blogs" />
        </div>

        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              heading={project.heading}
              title={project.title}
              desc={project.desc}
              image={project.image}
            />
          ))}
        </div>

        {/* Bawah gak ada harusnya */}

        <div className="sm:hidden flex flex-row space-x-4 py-2 overflow-x-auto scrollbar-hide">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-w-[280px] w-72 rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="relative px-4 py-6">
                <h4 className="font-semibold text-xl text-gray-900">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
