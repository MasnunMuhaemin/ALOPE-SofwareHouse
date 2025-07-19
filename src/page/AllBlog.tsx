import { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const AllBlog = () => {
  const blogs = [
    {
      image: "/img/alope.jpg",
      tag: "Frontend",
      title: "Mengenal React dari Nol",
    },
    {
      image: "/img/alope.jpg",
      tag: "Backend",
      title: "Belajar Node.js dan Express",
    },
    {
      image: "/img/alope.jpg",
      tag: "Technology",
      title: "Tren Teknologi 2025",
    },
    {
      image: "/img/alope.jpg",
      tag: "Frontend",
      title: "Mengoptimalkan Tailwind CSS",
    },
    {
      image: "/img/alope.jpg",
      tag: "Backend",
      title: "API REST vs GraphQL",
    },
    {
      image: "/img/alope.jpg",
      tag: "Technology",
      title: "Apa itu AI dan Machine Learning?",
    },
  ];

  const [activeTag, setActiveTag] = useState("All Topics");

  const filteredBlogs =
    activeTag === "All Topics"
      ? blogs
      : blogs.filter((blog) => blog.tag === activeTag);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f3f8ff] to-[#fff7e0] mt-20 px-6 py-10 md:px-16 lg:px-24">
      {/* Navbar */}
      <Navbar />

      {/* Go Back Button */}
      <a
        href="/"
        className="mb-4 inline-block px-4 py-2 border font-semibold border-blue-500 text-blue-500 text-sm rounded-full hover:bg-blue-500 hover:text-gray-100 transition-colors duration-300"
      >
        ← Go Back
      </a>

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
        <span className="text-blue-600">INSIDE</span> THE STACK
      </h1>
      <p className="text-gray-600 mb-6 text-center text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl mt-25 p-6 text-white flex items-center justify-between mb-8 min-h-[200px] overflow-visible">
        <img
          src="/img/image.png"
          alt="hero"
          className="absolute bottom-0 left-6 w-64 h-64"
        />
        <div className="ml-90 text-5xl font-semibold">ALOPE is Amazing!</div>
      </div>

      {/* Filter and Sort */}
      <div className="flex flex-wrap items-center mt-20 gap-2 mb-8">
        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2">
          {["All Topics", "Frontend", "Backend", "Technology"].map(
            (tag, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTag(tag)}
                className={`text-sm px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTag === tag
                    ? "bg-blue-500 text-white shadow-[0_8px_20px_-4px_rgba(59,130,246,0.4),0_-8px_20px_-4px_rgba(59,130,246,0.4)]"
                    : "bg-white text-blue-600 hover:bg-blue-200 shadow-[0_8px_20px_-4px_rgba(147,197,253,0.4),0_-8px_20px_-4px_rgba(147,197,253,0.4)]"
                }`}
              >
                {tag}
              </button>
            )
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="ml-auto text-sm flex items-center">
          <label htmlFor="sort" className="mr-2 font-bold text-gray-700">
            Sort by
          </label>
          <select
            id="sort"
            className="rounded px-2 py-1 bg-blue-100 shadow-md hover:bg-blue-200 transition-colors duration-300"
          >
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-15 gap-6">
        {filteredBlogs.map((blog, index) => {
          const dummyDate = new Date(2024, 6, 1 + index); // Tanggal berbeda tiap blog
          const day = String(dummyDate.getDate()).padStart(2, "0");
          const month = String(dummyDate.getMonth() + 1).padStart(2, "0");
          const year = dummyDate.getFullYear();
          const formattedDate = `${day}/${month}/${year}`;

          return (
            <div key={index} className="rounded-xl overflow-hidden shadow-md">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <span className="inline-block text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full mb-2">
                  {blog.tag}
                </span>
                <h3 className="text-lg font-bold leading-snug text-gray-800 mb-1">
                  {blog.title}
                </h3>

                <p className="text-[10px] text-gray-400 ">{formattedDate}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AllBlog;
