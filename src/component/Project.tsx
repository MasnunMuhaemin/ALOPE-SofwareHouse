// import React, { useState } from "react";

const Project = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 4;

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

  // const totalPages = Math.ceil(projects.length / itemsPerPage);
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section
      className="relative py-10 px-3 sm:px-6 md:px-6 lg:px-8 xl:px-8 text-black overflow-hidden"
      id="project"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/img/ungu.svg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/img/biru.svg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/img/kuning.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold">
            <span className="text-blue-500">Our</span> Works
          </h2>

          <a className="px-8 hidden sm:block  py-2 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-500 hover:text-white transition duration-300">
            See More Of Our Works
          </a>
        </div>
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-400 text-white p-4 lg:mb-16 sm:p-6 xl:p-8 rounded-xl shadow-lg flex flex-col sm:flex-row items-start min-h-[300px]"
            >
              <div className="w-full sm:w-1/2 relative">
                <h3 className="text-base sm:text-lg xl:text-xl font-semibold py-2">
                  {project.heading}
                </h3>
                <div className="relative h-[150px] sm:h-[180px] md:h-[200px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute bottom-[-120px] sm:bottom-[-5px] lg:bottom-[-100px] h-[250px] sm:h-[200px] lg:h-[300px] w-full left-0 rounded-xl object-cover  "
                  />
                </div>
              </div>
              <div className="sm:ml-4 mt-4 sm:mt-0 w-full sm:w-1/2 text-left z-10 flex flex-col justify-center h-full">
                <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-100">
                  {project.title}
                </span>
                <p className="text-sm sm:text-xs lg:text-base mt-1 text-justify text-gray-200">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="hidden sm:flex justify-center mt-8 space-x-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`text-base font-medium ${
              currentPage === i + 1
                ? "text-blue-600 font-bold"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div> */}
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
              <div className="absolute -top-5 left-6 bg-blue-500 text-white p-2 rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-base text-gray-900">
                {project.title}
              </h4>
              <p className="text-gray-600 text-xs mt-2 line-clamp-2">
                {project.desc}
              </p>
              <button className="mt-4 bg-blue-500 w-1/2 hover:bg-blue-600 text-white py-1 px-4 rounded-full">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
