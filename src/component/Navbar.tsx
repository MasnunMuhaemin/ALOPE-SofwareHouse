import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 backdrop-blur shadow-sm z-50 py-4 px-3 sm:px-6 md:px-6 lg:px-8 xl:px-8">
        <div className="container mx-auto ">
          <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-zinc-900">
              Alope Software House
            </h2>

            <div className="hidden md:flex items-center gap-3 sm:gap-4 md:gap-6">
              <ul className="flex gap-4 lg:gap-6 text-sm  md:text-base text-zinc-900">
                <li>
                  <a href="#home" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#aboutUs" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#ourWorks" className="hover:underline">
                    Our Works
                  </a>
                </li>
                <li>
                  <a href="#home" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
              <button className="bg-blue-500 shadow-md hover:bg-blue-600 text-white text-xs sm:text-sm px-4 sm:px-5 lg:px-6 py-2 rounded-full">
                Get In Touch
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={toggleSidebar} aria-label="Menu">
                <div className="space-y-1 mt-2">
                  <span className="block w-5 h-0.5 rounded-xs bg-black"></span>
                  <span className="block w-5 h-0.5 rounded-xs bg-black"></span>
                  <span className="block w-5 h-0.5 rounded-xs bg-black"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-2">
          <h3 className="font-bold text-lg">Menu</h3>
          <button onClick={closeSidebar} aria-label="Close">
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-xs text-zinc-900">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#course">Learning</a>
          </li>
          <li>
            <a href="#article">Blog</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
        </ul>
        <div className="px-4">
          <button className="w-[100px] bg-blue-500 hover:bg-blue-500 text-white py-1 rounded-full">
            Contact Us
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black opacity-30 z-40"
        ></div>
      )}
    </>
  );
};

export default Navbar;
