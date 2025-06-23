const AboutUs = () => {
  return (
    <section className="w-full flex py-18 sm:py-0 md:py-0 lg:py-0 justify-center items-center bg-gradient-to-r min-h-[600px] from-[#EDF4FF] to-[#FFF7EB] px-3 sm:px-6 lg:px-8  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className="">
          <h1 className="text-blue-600 text-xl sm:text-2xl font-semibold mb-2">
            About Us
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl font-bold text-justify text-gray-900 mb-8 max-w-xl leading-snug">
            ALOPE adalah komunitas berbagi ilmu coding untuk pemula.
          </p>

          <div className="bg-gradient-to-r from-[#E2E8F0]  to-[#B8D4F8] rounded-xl mx-auto p-6 sm:p-8 flex items-center justify-center max-w-sm shadow-lg">
            <img
              src="/img/Alope.png"
              alt="ALOPE"
              className="h-35 w-35 object-contain"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ml-4">
              ALOPE
            </h2>
          </div>
        </div>

        <div className="text-gray-700 ">
          <div className=" sm:mt-48 lg:mt-68 xl:mt-48">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Tentang ALOPE
            </h2>
            <p className="mb-6 text-sm sm:text-sm lg:text-base leading-relaxed  text-justify">
              ALOPE adalah sebuah komunitas programming yang memiliki visi untuk
              berbagi ilmu dan pengalaman seputar coding, dengan tujuan
              menciptakan lingkungan belajar yang inklusif dan mendukung bagi
              siapa saja yang ingin mengembangkan keterampilan di bidang
              pemrograman khususnya bagi pemula.
            </p>
          </div>
          <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-full text-sm sm:text-base font-medium hover:bg-blue-600 hover:text-white transition duration-300">
            Meet Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
