const AboutUs = () => {
  return (
    <>
      <section
        className="w-full flex py-32 justify-center items-center px-3 sm:px-6 lg:px-8 "
        id="aboutUs"
        // style={{
        //   backgroundImage:
        //     'url("/img/vector-1.svg"), url("/img/vector-2.svg")',
        //   backgroundRepeat: "no-repeat, no-repeat",
        //   backgroundSize: "cover, cover",
        //   backgroundPosition: "center, center",
        // }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="">
            <h1 className="text-blue-600 text-2xl sm:text-3xl font-semibold mb-2">
              About Us
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-8 max-w-xl leading-snug">
              ALOPE is a coding knowledge sharing community for beginners.
            </p>

            {/* <div
              className="rounded-xl mx-auto p-6 sm:p-8 flex items-center justify-center max-w-sm shadow-lg"
              style={{
                backgroundImage: 'url("/img/panda.svg")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src="/img/Alope.png"
                alt="ALOPE"
                className="h-35 w-35 object-contain"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ml-4">
                ALOPE
              </h2>
            </div> */}
          </div>

          <div className="text-gray-700 px-1.5">
            <div className="">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Tentang ALOPE
              </h2>
              <p className="mb-6 text-sm sm:text-sm lg:text-base leading-relaxed">
                ALOPE adalah sebuah komunitas programming yang memiliki visi
                untuk berbagi ilmu dan pengalaman seputar coding, dengan tujuan
                menciptakan lingkungan belajar yang inklusif dan mendukung bagi
                siapa saja yang ingin mengembangkan keterampilan di bidang
                pemrograman khususnya bagi pemula.
              </p>
            </div>

            <div className="w-full flex items-center justify-start mt-8">
              <a
                href="#"
                className="group flex items-center gap-4 text-sm px-8 py-2 border border-blue-600 text-blue-600 rounded-full font-medium bg-white shadow-md ring-1 ring-blue-300/40 hover:bg-blue-600 hover:text-white transition duration-300"
              >
                Meet Our Team
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
        </div>
      </section>
    </>
  );
};

export default AboutUs;
