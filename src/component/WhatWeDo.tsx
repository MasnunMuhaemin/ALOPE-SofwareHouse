const WhatWeDo = () => {
  return (
    <>
      <section
        className="relative py-10 px-3 sm:px-4 lg:px-8 bg-white text-black"
        id="learning"
        style={{
          backgroundImage:
            'url("/img/vector-ungu.svg"), url("/img/vector-biru.svg")',
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
        }}
      >
        <div className="container mx-auto">
          <div className="mb-10 ">
            <h2 className="text-blue-600 font-semibold text-2xl sm:text-2xl mb-2">
              Our Services
            </h2>
            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900">
              Our Top Services to Help You Grow.
            </h1>
          </div>

          <div className="max-w-5xl mx-auto min-h-[400px] lg:h-[400px] rounded-xl overflow-hidden border border-blue-400 shadow-md flex flex-col lg:flex-row bg-white">
            <div className="w-full h-full lg:w-1/2 bg-gradient-to-r from-blue-100 to-white flex items-center justify-start">
              <img
                src="/img/image.png"
                alt="Service Illustration"
                className="w-full h-full md:h-[300px] md:mt-5 lg:h-full xl:h-full object-contain"
              />
            </div>

            <div className="w-full lg:w-2/3  m-auto text-justify px-4 lg:px-6">
              <div className="mb-4">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">
                  Academy
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Akademi kami menawarkan pembelajaran terstruktur dan
                  interaktif untuk membantu Anda mengembangkan keterampilan
                  secara fleksibel dan sesuai kebutuhan dunia nyata.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">
                  Web App
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Kami membangun aplikasi web responsif dan mudah digunakan,
                  dari solusi sederhana hingga platform kompleks.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">
                  Mobile App
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Kami menciptakan aplikasi seluler yang cepat, intuitif, dan
                  disesuaikan dengan kebutuhan Anda, memungkinkan pengguna
                  terlibat kapan saja dan di mana saja dengan pengalaman yang
                  lancar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
